//core modules
const path = require('path');
//external modules
const express = require('express');


//local module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require('./routes/hostRouter');
const rootDir = require("./utils/pathUtil");
const errorController = require("./controllers/error");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views");
app.use(express.urlencoded({extended:true}))

app.use(storeRouter);
app.use("/host", hostRouter);
app.use(express.static(path.join(rootDir,"./public")));

app.use(errorController.pageNotFound);  

const PORT = 3000;
app.listen(PORT, (req, res, next)=>{
  console.log(`server is listening at the location: http://localhost:${PORT}`);
})

