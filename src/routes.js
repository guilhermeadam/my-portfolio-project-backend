const express = require('express');
const routes = express.Router();

const CadastroUserController = require('./controllers/CadastroUserController');
const CadastroNotesController = require('./controllers/CadastroNotesController');
const LoginUserController = require('./controllers/LoginUserController');
const NotesController = require('./controllers/NotesController');


routes.post('/cadastrouser', CadastroUserController.create);
routes.post('/cadastrarnotes', CadastroNotesController.create);
routes.post('/login', LoginUserController.create);

routes.get('/notes', NotesController.index);

module.exports = routes;