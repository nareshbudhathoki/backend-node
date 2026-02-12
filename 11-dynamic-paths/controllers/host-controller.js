const Home = require("../models/home");

exports.getAddHome = (req, res, next)=>{
  res.render( "host/add-home.ejs", {pageTitle:"Register Home", currentPage:"add-home"});
};

exports.getHostHome =  (req, res, next)=>{
  Home.fetchAll((registeredHomes) => {
    res.render("host/host-home-list", {
      registeredHomes,
      pageTitle: "Host-Homes List",
      currentPage: "hosthome"
    });
  });
}

exports.postAddHome =  (req, res, next)=>{
  const {houseName, location, pricePerNight, imageUrl, rating} = req.body;
  const home =  new Home(houseName, location, pricePerNight, imageUrl, rating);

  home.save();
  res.render("host/home-added.ejs", {pageTitle:"Home Added", currentPage:"home-added"});
}
