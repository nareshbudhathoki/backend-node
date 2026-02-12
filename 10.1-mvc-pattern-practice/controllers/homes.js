const Home = require("../models/home");

exports.getHome =  (req, res, next)=>{
  Home.fetchAll((registeredHomes) => {
    res.render("store/home", {
      registeredHomes,
      pageTitle: "airbnb Home",
      currentPage: "home"
    });
  });
}

exports.getAddHome = (req, res, next)=>{
  res.render( "host/add-home.ejs", {pageTitle:"Register Home", currentPage:"add-home"});
};


exports.postAddHome =  (req, res, next)=>{
  const {houseName, location, pricePerNight, imageUrl, rating} = req.body;
  const home =  new Home(houseName, location, pricePerNight, imageUrl, rating);

  home.save();
  res.render("host/home-added.ejs", {pageTitle:"Home Added", currentPage:"home-added"});
}
