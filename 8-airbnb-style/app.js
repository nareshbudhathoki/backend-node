//core modules
const path = require('path');
//external modules
const express = require('express');


//local module
const useRouter = require("./routes/userRouter");
const hostRouter = require('./routes/hostRouter');
const rootDir = require("./utils/pathUtil");

const app = express();

app.use(express.urlencoded({extended:true}))

app.use(useRouter);
app.use("/host", hostRouter);
app.use(express.static(path.join(rootDir,"./public")));
app.use((req, res, next)=>{
  res.sendFile(path.join(rootDir, "./views/404-error.html"));
})

const PORT = 3000;
app.listen(PORT, (req, res, next)=>{
  console.log(`server is listening at the location: http://localhost:${PORT}`);
})

