const fs = require('fs');

const archivo = './db/data.json';

const guardarData = (data) => {

    fs.writeFileSync(archivo, JSON.stringify(data));
}

const leerData = () => {

    if (!fs.existsSync(archivo)) return null;

    const data = JSON.parse(fs.readFileSync(archivo,{encoding: 'utf-8'}));

    return data;
}


module.exports = {
    guardarData,
    leerData
}