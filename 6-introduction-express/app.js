
//External Module
const express = require('express');

//Local Module
const requestHandler = require('./user')

const app = express();

app.use("/",(req, res, next) =>{
  console.log("came in first middleware",req.url, req.method);
  next();
});

app.use("/submit-details",(req, res, next) =>{
  console.log("came in second middleware",req.url, req.method);
  res.send("<h1>Submit Details Section</h1>")
});

app.use((req, res, next) =>{
  console.log("came in third middleware",req.url, req.method);
  res.send('<p>Welcome to the Billionare Club</p>')
});


const PORT = 3002;
app.listen(PORT, ()=>{
  console.log(`Server running on address: http://localhost:${PORT}`);
});