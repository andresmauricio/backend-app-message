const Model = require('./model');

function addUser (user) {
    const myUser = new Model(user);
    return myUser.save();

}

async function getUser () {
    const user = await Model.find()
    return user;
}

module.exports = {
    add: addUser,
    get: getUser
}