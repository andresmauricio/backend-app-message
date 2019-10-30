const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const route = express.Router();

route.get('/:userId', function (req, res) {
    controller.listChat(req.params.userId)
        .then((users) => {
            response.success(req, res, users, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Inesperado', 500, e);
        });
});

route.post('/', function (req, res) {
    controller.addChat(req.body.users)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion Invalida', 400)
        });

});

module.exports = route;