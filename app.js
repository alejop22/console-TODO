require('colors');
const { guardarData, leerData } = require('./helpers/guardarArchivo');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tareas = require('./models/tareas');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    const data = leerData();

    if (data) {
        tareas.cargarTareasFromArr(data);
    }
    
    do {
        opt = await inquirerMenu();

        switch (opt) {
            case 1:
                const tarea = await leerInput('Descripcion: ');
                tareas.creaTarea(tarea);

                break;
            case 2:
                tareas.listadoCompleto();
                break;
            case 3:
                tareas.listarPendientesCompletadas(true);
                break;
            case 4:
                tareas.listarPendientesCompletadas(false);
                break;
            case 5:
                
                break;
            case 6:
                
                break;
            case 0:
                
                break;
        }

        guardarData(tareas.listadoArr);

        await pausa();

    } while (opt !== 0);
}

main();