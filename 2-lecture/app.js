//creating our first node server

const http = require('http');

const server = http.createServer((req, res)=>{
  console.log(req.url, req.method, req.headers);
  // process.exit();

  if(req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head> <title>Complete Startup series</title> </head>')
  res.write('<body>')
  res.write('<h1>Welcome to home page</h1>')
  res.write('</body>')
  res.write('</html>')
  return res.end();
  }
else if (req.url === '/products' || req.url === '/products/') {
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head> <title>Complete Startup series</title> </head>')
  res.write('<body>')
  res.write('<h1>Your are on products page</h1>')
  res.write('</body>')
  res.write('</html>')
  return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head> <title>Complete Startup series</title> </head>')
  res.write('<body>')
  res.write('<h1>Welcome to the Billionare Club</h1>')
  res.write('</body>')
  res.write('</html>')
  return res.end();

});

const PORT = 3000;

server.listen(PORT, () =>{
  console.log(`Server is listening on the server http://localhost:${PORT}`);
});
