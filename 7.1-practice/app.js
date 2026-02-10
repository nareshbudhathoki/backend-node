//core modules
const path = require('path');

//external modules
const express = require('express');

//local modules
const rootDir = require("./utils/pathUtil");
const contactRouter = require("./routes/contactRouter");
const homeRouter = require('./routes/homeRouter');

const app = express();
app.use(express.urlencoded({extended:true}));

app.use(homeRouter)
app.use("/contact", contactRouter);


app.use( (req, res, next)=>{
  res.sendFile(path.join(rootDir, "./views/404-error.html"))
})


const PORT = 3000;

app.listen(PORT, (req, res) =>{
  console.log(`server is listening at address: http://localhost:${PORT}`);
});

