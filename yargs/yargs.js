const argv = require('yargs').options({
    direccio: {
        alias: 'd',
        desc: 'Descripcio desti on volem saber el clima',
        demand: true
    }
}).argv;

module.exports = {
    argv
}