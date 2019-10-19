var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Transaction = new Schema({
    sender:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    reciever:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    amount:{
        type:Number,
        required: true
    },
    status:{
        type: Boolean,
        default: false
    }
}, {
        timestamps: true
    }
);

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('Transaction', Transaction);