const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const authenticate = require('../../authenticate');
const cors = require('../cors');

const balance = require('../../models/user');

const addBal = express.Router();

addBal.use(bodyParser.json());

addBal.route('/')
.options(cors.corsWithOptions, (req, res) => {
    res.sendStatus = 200;
})
.post(cors.corsWithOptions,(req, res, next) => {
    console.log(req.body);
    balance.create({...req.body,
    owner: req.user._id}
    .then((product)=>{
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json(product);
},(err)=>(next(err)))       
.catch((err)=>(next(err)))
    )}).get(cors.corsWithOptions,(req,res,next) => {
        balance.find(req.query)
        .populate('owner')
        .sort({views : -1})
        .then((products)=>{
            res.statusCode=200;
            res.setHeader('Content-Type','application/json');
            res.json(products);
        },(err)=>(next(err)))
        .catch((err)=>(next(err)))
    });
module.exports = addBal;