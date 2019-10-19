var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Transaction = new Schema({
    sender:{
        
    }
});

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('Transaction', Transaction);