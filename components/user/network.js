const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const route = express.Router();

route.get('/', function (req, res) {
    controller.getUser()
        .then((userList) => {
            response.success(req, res, userList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error Innesperado', 500, e);
        })
});

route.post('/', function (req, res)  {
    controller.addUser(req.body.name)
        .then( data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res,'Internal Error', 500, e);
        })
});

module.exports = route;