const express = require('express');
const bodyParser = require('body-parser');
const response = require('./network/response');
const route = express.Router();

var app = express();
app.use(bodyParser.json());
app.use(route);


route.get('/message', function (req, res) {
  response.success(req, res, 'Listado Mensajes', 200);
});

route.post('/message', function (req, res) {
  response.success(req, res, 'Mensaje enviado', 201);
});

route.delete('/message', function (req, res) {
  if (req.query.error == "ok") {
    response.error(req, res, 'Error Simulado', 500);
  } else {
    response.success(req, res, 'Mensaje Eliminado Correctamente', 200);
  }  
});

app.use('/app', express.static('public'));

app.listen(3000);
console.log('Aplicaion funcionando');