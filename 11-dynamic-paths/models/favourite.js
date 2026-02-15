
//core modules 
const fs = require('fs');
const path = require('path');

//local modules
const rootDir = require("../utils/pathUtil");
const favouriteDataPath = path.join(rootDir, "data", "favourites.json");

module.exports = class Favourite{
  constructor(homeId){
    this.homeId = homeId;
  }

  static  postAddToFavourite(homeId, callback){
    Favourite.getFavourites((favourites) =>{
      if(favourites.includes(homeId)){
        console.log("Home already marked favourite");
        return callback();
      }
      else{
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), (error) =>{
          console.log("File writing concluded", error);
          callback(error);
        });
      }
    });
  }

  static getFavourites(callback){
    fs.readFile(favouriteDataPath, (err, data) =>{
      callback(!err ? JSON.parse(data) : [])
  });
}
}
