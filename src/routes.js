const express = require('express');
const routes = express.Router();

const TestController = require('./controllers/TestController');

routes.get('/', TestController.index);

module.exports = routes;