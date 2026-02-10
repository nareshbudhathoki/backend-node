
//core modules
const path = require('path');

//external modules
const express = require('express');
const hostRouter = express.Router();

//local modules
const rootDir = require("../utils/pathUtil");

hostRouter.get("/add-home", (req, res, next)=>{
  res.render( "add-home.ejs", {pageTitle:"Register Home", currentPage:"add-home"});
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next)=>{
  registeredHomes.push(req.body);
  console.log(registeredHomes);
  res.render("home-added.ejs", {pageTitle:"Home Added", currentPage:"home-added"});
})

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;