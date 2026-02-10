
//core modules
const path = require('path');
//External Module
const express = require('express');
const { registeredHomes } = require('./hostRouter');
const userRouter = express.Router();

userRouter.get("/", (req, res, next)=>{
  res.render('home', {registeredHomes, pageTitle:"airbnb Home", currentPage:"home"});
});

module.exports = userRouter;