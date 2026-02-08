console.log("Welcome to the billionare club");

const fs = require('fs');

fs.writeFile("output.txt", "writing File",(err)=>{
  if(err){
    console.log("Error Occured");
  }
  else{
    console.log("File written successfully")
  }
} )