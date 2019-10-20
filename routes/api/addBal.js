const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const authenticate = require("../../authenticate");
const cors = require("../cors");

const user = require("../../models/user");

const addBal = express.Router();

addBal.use(bodyParser.json());

addBal
  .route("/")
  .options(cors.corsWithOptions, (req, res) => {
    res.sendStatus = 200;
  })
  .post(cors.corsWithOptions, (req, res, next) => {
    user
      .findByIdAndUpdate(
        req.params.productId,
        {
          $set: req.body
        },
        { new: true }
      )
      .then(
        product => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(product);
        },
        err => next(err)
      )
      .catch(err => res.status(400).json({ success: false }));
  });
module.exports = addBal;
