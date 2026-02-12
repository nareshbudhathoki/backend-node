
//External Module
const express = require('express');

//local modules
const homesController = require("../controllers/homes")

const userRouter = express.Router();

userRouter.get("/", homesController.getHome);

module.exports = userRouter;