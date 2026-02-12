
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
    Home.fetchAll((registeredHomes)=>{
      registeredHomes.push(this);
      const homeDataPath = path.join(rootDir, 'data', 'homes.json');
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), error=> {
      console.log("File Writing Concluded", error);
      });
    })
  }

  static fetchAll(callback){
    const homeDataPath = path.join(rootDir, 'data', 'homes.json');
    fs.readFile(homeDataPath, (err, data) =>{
      callback(!err ?JSON.parse(data) : []);
    });
    }
}
 
