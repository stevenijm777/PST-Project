const db = require('./database')
const androidCtrl = {};

androidCtrl.getJugadores = (req,res)=>{
    const jugador = db.jugadores.find(
        (est)=>est.id == req.params.id
    );

    res.json(jugador);

};

androidCtrl.postJugadores = (req,res)=>{
    const {nombre} = req.body;
    if(!nombre){
        res.status(400).send("Datos incompletos");
        return;
    }
    const jugador = {
        nombre
    }
    db.jugador.push(jugador);
    db.updateDB();
    res.send('Jugador ingresado con éxito');

};

module.exports = androidCtrl;
