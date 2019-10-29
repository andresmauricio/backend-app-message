const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const route = express.Router();

route.get('/', function (req, res) {
    controller.getMessages()
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Inesperado', 500, e);
        });
});

route.post('/', function (req, res) {
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion Invalida', 400)
        });

});


module.exports = route;