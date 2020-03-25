const express = require('express');

const OngController = require('./controllers/OngController');
const IncidenteController = require('./controllers/IncidenteController');
const ProfileController = require('./controllers/ProfileController');
const LoginController = require('./controllers/LoginController');



const routes = express.Router();

routes.post('/login', LoginController.create);

/*LISTAGEM DE ONGS*/
routes.get('/ongs', OngController.index);
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidenteController.index);
routes.post('/incidents', IncidenteController.create);
routes.delete('/incidents/:id', IncidenteController.delete);


module.exports = routes;