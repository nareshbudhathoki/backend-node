
//core modules 
const fs = require('fs');
const path = require('path');

//local modules
const rootDir = require("../utils/pathUtil");
const homeDataPath = path.join(rootDir, "data", "homes.json");

module.exports = class Home{
  constructor(houseName, location, pricePerNight, imageUrl, rating){
    this.houseName = houseName;
    this.location = location;
    this.pricePerNight = pricePerNight;
    this.imageUrl = imageUrl;
    this.rating = rating;
  }

  save(){
    this.id = Math.random().toString();
    Home.fetchAll((registeredHomes)=>{
      registeredHomes.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error=> {
      console.log("File Writing Concluded", error);
      });
    })
  }

  static fetchAll(callback){
    fs.readFile(homeDataPath, (err, data) =>{
      callback(!err ?JSON.parse(data) : []);
    });
    }

    static findById(homeId, callback){
      Home.fetchAll(homes =>{
        const homeFound = homes.find(home => home.id === homeId);
        callback(homeFound);
      })
    }




}
 
