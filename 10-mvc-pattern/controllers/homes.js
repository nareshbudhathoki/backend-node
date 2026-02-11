const Home = require("../models/home");

exports.getHome =  (req, res, next)=>{
  const registeredHomes = Home.fetchAll();
  res.render('home', {registeredHomes, pageTitle:"airbnb Home", currentPage:"home"});
}

exports.getAddHome = (req, res, next)=>{
  res.render( "add-home.ejs", {pageTitle:"Register Home", currentPage:"add-home"});
};


exports.postAddHome =  (req, res, next)=>{
  const {houseName, location, pricePerNight, imageUrl, rating} = req.body;
  console.log(req.body);
  const home =  new Home(houseName, location, pricePerNight, imageUrl, rating);

  home.save();
  res.render("home-added.ejs", {pageTitle:"Home Added", currentPage:"home-added"});
}
