const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authenticate = require("../../authenticate");
const cors = require("../cors");

const transaction = require("../../models/transaction");

const trans = express.Router();

trans.use(bodyParser.json());

trans
  .route("/")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus = 200;
  })
transaction.create({
  ...req.body, images: [(req.files[0]) ? 'client/public/uploads/' + req.files[0].key : 'client/public/uploads/Not_available.jpg',

})
  .then((product) => {
    transaction.findById(product._id)
      .populate('owner')
      .then((product) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(product);
      }, (err) => (next(err)))

      .catch((err) => (next(err)))
  }, (err) => (next(err)))
  .catch((err) => (next(err)))
})
module.exports = trans;
