const express = require ('express');

const mainController =  require('../controllers/mainController');

const mainRouters = express.Router();

mainRouters.get('/', mainController.index)
mainRouters.get('/register', mainController.register)
mainRouters.get('/login', mainController.login)

module.exports = mainRouters;
