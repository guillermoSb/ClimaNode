const axios = require('axios');

const getClima = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=cd3773532f1300f241a1f8935fd85c90`)

    return resp.data.main.temp;

}

module.exports = {
    getClima
}