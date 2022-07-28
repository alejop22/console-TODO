require('colors');
const { inquirerMenu, pausa, leerInput } = require('./helpers/inquirer');
const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');

// const { mostrarMenu, pausa } = require('./helpers/mensajes');

const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    
    do {
        opt = await inquirerMenu();


        switch (opt) {
            case 1:
                
                const tarea = await leerInput('Descripcion: ');
                tareas.creaTarea(tarea);

                break;
            case 2:
                console.log(tareas._listado);
                break;
            case 3:
                
                break;
            case 4:
                
                break;
            case 5:
                
                break;
            case 6:
                
                break;
            case 0:
                
                break;


        }

        if (opt !== 0) await pausa();

    } while (opt !== 0);
}

main();