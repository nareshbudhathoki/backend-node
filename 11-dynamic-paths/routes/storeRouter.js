
//External Module
const express = require('express');

//local modules
const storeController = require("../controllers/store-controller")

const storeRouter = express.Router();

storeRouter.get("/",storeController.getIndex)
storeRouter.get("/homes", storeController.getHome);
storeRouter.get("/bookings",storeController.getBookings )
storeRouter.get("/favourites",storeController.getFavouriteList)
storeRouter.get("/homes/:homeId", storeController.getHomeDetails);
storeRouter.post("/favourites",storeController.postAddToFavourite);


module.exports = storeRouter;