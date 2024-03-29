const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const route = express.Router();

route.get('/', function (req, res) {
    const filterMessage = req.query.chat || null;
    controller.getMessages(filterMessage)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Inesperado', 500, e);
        });
});

route.post('/', function (req, res) {
    controller.addMessage(req.body.chat, req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion Invalida', 400)
        });

});

route.patch('/:id', function (req, res) {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Interno', 500, e);
        });
});

route.delete('/:id', function (req, res) {
    controller.deleteMessage(req.params.id)
        .then(() =>{
            response.success(req, res, `Usuario ${req.params.id} Eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Interno', 500, e);
        })
});


module.exports = route;