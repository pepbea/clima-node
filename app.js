//AIzaSyDRQG4qESbZV7xR7rOsqL9903FbGEo9OJg
const { argv } = require('./yargs/yargs');
const location = require('./location/location');
const clima = require('./clima/clima');



let getInfo = async(direccio) => {

    try {
        let coords = await location.getLocationLatLong(direccio);
        let temp = await clima.getClima(coords.lat, coords.long);
        return `En la ciutat ${direccio} hi ha una temperatura de ${temp}`;
    } catch {
        console.log(`La ciutat ${direccio} no s'ha trobat temperatura`);
    }
}

getInfo(argv.direccio)
    .then(resp => console.log(resp))
    .catch(e => console.log(e));


/*
location.getLocationLatLong(argv.d)
    .then(resposta => {

        clima.getClima(resposta.lat, resposta.long)
            .then(resposta => console.log(resposta.temp))
            .catch(e => console.log(e));
    }).catch(e => console.log(e));
    */