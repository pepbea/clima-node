const axios = require('axios');


const getClima = async(lat, long) => {

    let resposta = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=metric&appid=cd26489a8a5591bcb7168b97f867871d`)
    if (resposta.data.cod !== 200) {
        throw new Error(`No hi ha resultats per les coordenades indicades`);
    }

    //console.log(JSON.stringify(response.data, undefined, 2));
    return resposta.data.main.temp;
};

module.exports = {
    getClima
}