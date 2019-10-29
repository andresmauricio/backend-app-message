const express = require('express');
const bodyParser = require('body-parser');
const route = require('./network/routes');

var app = express();
app.use(bodyParser.json());
// app.use(route);
route(app);




app.use('/app', express.static('public'));

app.listen(3000);
console.log('Aplicaion funcionando');