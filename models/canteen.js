var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passportLocalMongoose = require('passport-local-mongoose');

var Canteen = new Schema({
    name: {
        type: String,
          required: true,
    },
    phone: {
        type: String,
        minlength: 9,
        maxlength: 10
    },
    address:{
      type: String,
      required: true,

    },
    owner:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}
);

User.plugin(passportLocalMongoose);
module.exports = mongoose.model('Canteen', Canteen);