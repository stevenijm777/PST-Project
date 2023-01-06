const fs = require('fs');
const db = {};

let RJ = {};
function init() {
    try {
        //Intenta cargar el archivo JSON
        const json_text_RJ = fs.readFileSync('./src/database.json', 'utf-8')
        RJ = JSON.parse(json_text_RJ) //Transforma un String a objeto JSON
    } catch (e) {
        //Si no existe, crea el objeto JSON y lo guarda en un archivo .json
        RJ = {
            jugadores: [{ nombre: "Ney Coto", ID: 1 },],
        }
        //Transforma un objeto JSON a String y lo guarda en un archivo
        fs.writeFileSync('./src/database.json', JSON.stringify(RJ), 'utf-8');
    }
    //se crean variables para acceder a ciertos atributos
    db.jugadores = RJ.jugadores;
}
function updateDB(){
    //actualiza el archivo JSON
    fs.writeFileSync('./src/database.json', JSON.stringify(RJ), 'utf-8');
}

db.init = init;
db.updateDB = updateDB;

module.exports = db;
