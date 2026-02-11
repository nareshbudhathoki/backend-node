const registeredHomes = [];

exports.getHome =  (req, res, next)=>{
  res.render('home', {registeredHomes, pageTitle:"airbnb Home", currentPage:"home"});
}

exports.getAddHome = (req, res, next)=>{
  res.render( "add-home.ejs", {pageTitle:"Register Home", currentPage:"add-home"});
};


exports.postAddHome =  (req, res, next)=>{
  registeredHomes.push(req.body);
  console.log(registeredHomes);
  res.render("home-added.ejs", {pageTitle:"Home Added", currentPage:"home-added"});
}



