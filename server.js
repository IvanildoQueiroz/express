//link de conexão
// mongodb+srv://ivanildojua1995:newUserInBD2025@cluster0.so175.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

require('dotenv').config()

const express = require("express");

const app = express();

const mongoose = require('mongoose');
mongoose.connect(process.env.CONNECTIONSTRING)
.then(()=>{
  app.emit('Running');
})
.catch(e=>{
  console.log('>>>>>> ',e);
})

const path = require("path");

const routes = require("./src/routes/Routes");

const Middleware = require('./src/midlleWare/middleware');

//CRUD - CREATE (post), READ (get), PUT (update), DELETE

// http://meusite.com/ <- GET -> rentregue a pagina

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.resolve(__dirname,'public')))

app.set("views", path.resolve(__dirname, "src", "views"));
app.set('view engine','ejs');

app.use(Middleware.MiddlewareGlobal);;

app.use(routes);

// app.get('/tests/:idUser?/:idAdmin?',(req,res)=>{
//     console.log(req.params);
//     res.send(req.params)
// })
// app.post('/',(req,res)=>{
//     res.send(`Recebi o formulário ! return: ${req.body.name}`);
// })

//Ouvindo a porta para poder responder

app.on("Running",()=>{
  console.log('sinal recebido ...')
  app.listen(3001, () => {
    console.log("Server turn on ...");
  });

})
