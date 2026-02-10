//core modules
const path = require('path');

//external module
const express = require('express');
const contactRouter = express.Router();

//local modules
const rootDir = require('../utils/pathUtil')

contactRouter.get("/contact-us",(req, res, next)=>{
  res.sendFile(path.join(rootDir, "./views/contact-us.html"));
})

contactRouter.post("/contact-success", (req, res, next)=>{
  console.log(req.body);
  res.sendFile(path.join(rootDir, "./views/contact-success.html"))
})


module.exports = contactRouter;