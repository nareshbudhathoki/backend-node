const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use("/", (req, res, next) => {
  console.log("This is the first dummy middleware", req.url, req.method);
  next();
});

app.use("/contact-us", (req, res, next) => {
  console.log("This is the second dummy middleware", req.url, req.method);
  next();
});

app.use("/hello", (req, res, next) => {
  console.log("This is the third dummy middleware", req.url, req.method);
  res.send("Welcome to the billionare club");
});

app.get("/", (req, res, next) => {
  console.log("Handling get middleware in '/' path ");
  res.send("<h3> handling response in / </h3>");
});

app.get("/contact-us", (req, res, next) => {
  console.log("handling contact us page");
  res.send(`
Please give your details here
<br> <br>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <form action="/contact-us" method="POST">
    <label for="first">FirtName:</label> <br>
    <input type="text" name="firstname" id="first" placeholder="enter your first name">
    <br>
    <label for="second">LastName:</label>
    <br>
    <input type="text" id="second" placeholder="enter your second name" name="lastname">
    <br>
    <button type="submit">Submit</button>
  </form>
</body>
</html>
    
    `);
});

app.use(bodyParser.urlencoded({extended:true}));

app.post("/contact-us", (req,res, next)=>{
  console.log("post request handling", req.url, req.method, req.body)
  res.send('Thanks for your details. We will contact you shortly');
})

const PORT = 3000;
app.listen(PORT, (req, res) => {
  console.log(`server is listening on the address: http://localhost:${PORT}`);
});
