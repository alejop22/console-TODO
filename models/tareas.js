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
}

module.exports = Tareas;