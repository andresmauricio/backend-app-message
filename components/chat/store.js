const Model = require('./model');

function addchat (chat) {
    const myChat = new Model(chat);
    return myChat.save();
}

function listChats (userId) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (userId) {
            filter = { user: userId}
        }
         Model.find(filter)
            .populate('users')
            .exec((error, populated) => {
                if (error) {
                    reject(error);
                    return false;
                }
                resolve(populated);
            })
    })

}

module.exports = {
    add: addchat,
    list: listChats,

}