//Getting the arguments
const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad',
        demand: true
    }
}).argv;
//lugar
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

let getInfo = async(direccion) => {
    try {
        let coords = await lugar.getLugarLatLng(direccion);
        let temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima en ${coords.direccion} es de - ${temp}C`

    } catch (e) {
        return `No se pudo determinar el clima en: ${direccion}`
    }
}

getInfo(argv.direccion)
    .then(msg => {
        console.log(msg);
    })
    .catch(e => {
        console.log(e);
    });