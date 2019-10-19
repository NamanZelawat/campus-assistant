const ask = require('./controller').ask;
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose=require('mongoose');
const chat = express.Router();
const authenticate=require('../../authenticate');
const cors = require('../cors');
const Products=require('../../models/products');
var aws = require('aws-sdk');
var multerS3 = require('multer-s3');
var multer = require('multer');

chat.use(bodyParser.json());

chat.post('/ask', ask)

module.exports = ask