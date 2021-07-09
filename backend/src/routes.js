const express = require('express');

const UsuarioController = require('./controllers/UsuarioController');

const routes = express.Router();

routes.get('/usuarios', UsuarioController.index);

routes.post('/usuarios', UsuarioController.salvar);

module.exports = routes;