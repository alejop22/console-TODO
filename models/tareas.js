require('colors');
const Tarea = require("./tarea");

class Tareas {

    constructor() {
        this._listado = {};
    }

    get listadoArr() {

        const listado = [];

        Object.keys(this._listado).forEach(key => {
            const tarea = this._listado[key];
            listado.push(tarea);
        });

        return listado
    }

    cargarTareasFromArr(tareas = []) {
        tareas.forEach(tarea => {
            this._listado[tarea.id] = tarea;
        });
    }
    
    creaTarea(desc) {
        const tarea = new Tarea(desc);

        this._listado[tarea.id] = tarea;
    }

    listadoCompleto() {
        console.log();
        if (this.listadoArr.length === 0) {
            console.log(`${'No hay tareas :D!'.green}`);
        } else {
            this.listadoArr.forEach((tarea, index) => {
                console.log(`${(index+1+'.').green} ${tarea.desc} :: ${tarea.completadoEn ? 'Completada'.green : 'Pendiente'.red}`);
            });
        }
    }

    listarPendientesCompletadas(completas) {
        console.log();
        if (this.listadoArr.length === 0) {
            console.log(`${'No hay tareas :D!'.green}`);
        } else {
            let contador = 0;
            if (completas) {
                
                this.listadoArr.forEach((tarea) => {
                    const {completadoEn} = tarea;

                    if (completadoEn) {
                        contador += 1
                        console.log(`${((contador+'.')).green} ${tarea.desc} :: ${completadoEn.green}`)
                    } 
                });
            } else {
                
                this.listadoArr.forEach((tarea) => {
                    const {completadoEn} = tarea;

                    if (!completadoEn) {
                        contador += 1
                        console.log(`${((contador+'.')).green} ${tarea.desc} :: ${'Pendiente'.red}`)
                    }
                });
            }
            
        }
    }

    borrarTarea(id) {
        if (this._listado[id]) {
            delete this._listado[id];
        }
    }

    toggleCompletadas(ids) {
        ids.forEach(id => {
            const tarea = this._listado[id];

            if (!tarea.completadoEn) {
                tarea.completadoEn = new Date().toISOString();
            }
        });

        this.listadoArr.forEach(tarea => {

            if(!ids.includes(tarea.id)) {
                this._listado[tarea.id].completadoEn = null;
            }
        });
    }
}

module.exports = Tareas;