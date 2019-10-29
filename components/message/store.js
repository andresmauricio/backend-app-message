const db = require('mongoose');
const Model = require('./model');

// 
db.Promise = global.Promise;
db.connect('mongodb://user:user123@ds241288.mlab.com:41288/telegrom', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

console.log('[db] conectada con exito');


function addMessage (message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage (filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser}
    }
    const message = await Model.find(filter);
    return message;
}

async function updateText (id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });
    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessage,
    updateText: updateText,
}