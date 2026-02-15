const Home = require("../models/home");
const Favourite = require("../models/favourite");

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

  //add to favourite list

exports.postAddToFavourite = (req, res, next) => {
  const homeId = req.body.id;
  console.log("POST /favourites called. Home ID:", homeId);
  Favourite.postAddToFavourite(homeId, (error) => {
    if (error) {
      console.log("Error while adding favourite:", error);
    }
    return res.redirect("/favourites");
  });
};

  //home details page

exports.getHomeDetails = (req, res, next)=>{
  const homeId = req.params.homeId;
  Home.findById(homeId, home =>{
    if(!home){
      console.log("Home not found");
      res.redirect("/homes");
    }
    else{
    console.log("Home Details Found", home);
    res.render("store/home-detail", {
      home: home,
      pageTitle: "Home Detail",
      currentPage: "home-details",
  });
  }
  })

  };
