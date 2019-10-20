var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var passportLocalMongoose = require("passport-local-mongoose");

var Shops = new Schema({
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    minlength: 9,
    maxlength: 10
  },
  showphone: {
    type: Boolean,
    default: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  }
});

// User.plugin(passportLocalMongoose);
module.exports = mongoose.model("Shops", Shops);
