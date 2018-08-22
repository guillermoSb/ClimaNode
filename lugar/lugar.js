const axios = require('axios');

const getLugarLatLng = async(direccion) => {
    let encodedUrl = encodeURI(direccion);
    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyBHKEFJq80tYlPQYVlS6TzRvr0hvyp-1LQ`)
    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para: ${direccion}`);
    }


    let location = resp.data.results[0];
    let coors = location.geometry.location;

    //latitude
    let lat = coors.lat;

    //longitude
    let lng = coors.lng;

    //formated address
    let faddress = location.formatted_address;


    return {
        direccion: faddress,
        lat,
        lng
    }
}

module.exports = {
    getLugarLatLng
}