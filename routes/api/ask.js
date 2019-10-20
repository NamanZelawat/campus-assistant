const ask = require("./controller").ask;
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const chat = express.Router();
const authenticate = require("../../authenticate");
const cors = require("../cors");
// const Products = require("../../models/products");
// var aws = require('aws-sdk');
// var multerS3 = require('multer-s3');
// var multer = require('multer');
// const cors = require('../cors');
chat.use(bodyParser.json());

chat
  .route("/")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus = 200;
  })
  .post(cors.corsWithOptions, ask);

module.exports = ask;
