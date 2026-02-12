const Home = require("../models/home");

//index page

exports.getIndex =  (req, res, next)=>{
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "index"
    });
  });
}

//added home page
exports.getHome =  (req, res, next)=>{
  Home.fetchAll((registeredHomes) => {
    res.render("store/home-list", {
      registeredHomes,
      pageTitle: "Homes List",
      currentPage: "home"
    });
  });
}

//bookings page

exports.getBookings =  (req, res, next)=>{
  Home.fetchAll((registeredHomes) => {
    res.render("store/bookings", {
      registeredHomes,
      pageTitle: "My Bsooking",
      currentPage: "bookings"
    });
  });
  };

//favourite page

exports.getFavouriteList =  (req, res, next)=>{
  Home.fetchAll((registeredHomes) => {
    res.render("store/favourite-list", {
      registeredHomes,
      pageTitle: "My Favourite List",
      currentPage: "favourites"
    });
  });
  };