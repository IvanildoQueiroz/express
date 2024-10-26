const express = require('express');
const route = express.Router();

const HomeController = require('../controlls/homeController');
const ContatoController  = require('../controlls/ContatoController');

function myMiddleware(req,res,next){
    console.log()
    console.log('Middleware executado');
    console.log()
    next()
}

//Rotas HOME
route.get('/', myMiddleware,HomeController.initialPage);
route.post('/',HomeController.TrataPost);

//routes of contacts

route.get('/contato',ContatoController.initialPageContato)

module.exports = route;

