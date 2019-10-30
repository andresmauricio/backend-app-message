const express = require('express');
const bodyParser = require('body-parser');
const route = require('./network/routes');
const db = require('./db');

db('mongodb://user:user123@ds241288.mlab.com:41288/telegrom');

var app = express();
app.use(bodyParser.json());
// app.use(route);
route(app);




app.use('/app', express.static('public'));

app.listen(3000);
console.log('Aplicaion funcionando');