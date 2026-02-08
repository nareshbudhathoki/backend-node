const http = require("http");

const server = http.createServer((req, res)=>{
  console.log(req.url);
});

const PORT = 3005;
const dum = 5;
if(dum > 3){
  console.log("Greater than 3");
}else{
  console.log("Less than or equal to 3");
}

server.listen(PORT, () =>{
  console.log(`Server running on address http://localhost:${PORT}`);
});

