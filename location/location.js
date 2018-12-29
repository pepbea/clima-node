const axios = require('axios');


const getLocationLatLong = async(direccio) => {
    let encodedUrl = encodeURI(direccio);
    let resposta = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyDyJPPlnIMOLp20Ef1LlTong8rYdTnaTXM`)
    if (resposta.data.status === "ZERO_RESULTS") {
        throw new Error(`No hi ha resultats per la ciutat ${direccio}`);
    }

    //console.log(JSON.stringify(response.data, undefined, 2));
    let adreca = resposta.data.results[0].formatted_address;
    let lat = resposta.data.results[0].geometry.location.lat;
    let long = resposta.data.results[0].geometry.location.lng;
    //console.log(adreca, lat, long);
    return {
        adreca,
        lat,
        long
    }
}

module.exports = {
    getLocationLatLong
}