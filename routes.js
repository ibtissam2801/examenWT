let express = require("express")

let router = express.Router()

//let <nom_variable_du controlleur> = require('./controllers/<nom du fichier controlleur>')
let userController = require('./controllers/userController');
//router.get('/', <nom_variable_du controlleur>.<nom de la fonction du controlleur>)
router.get('/',(req,res)=>res.redirect('/user'));
router.get('/user',userController.person);
module.exports = router