const {Router} = require('express');
const {getJugadores} = require('../controllers/androidController');
const {postJugadores} = require('../controllers/androidController');
const router = Router();

router.route('/').get(getJugadores);
router.route('/').get(postJugadores);

module.exports = router; 
