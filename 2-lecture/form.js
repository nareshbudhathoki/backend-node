const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res)=> {
  if(req.url === '/'){
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head> <title>Complete Startup series</title> </head>')
  res.write('<body>')
  res.write('<h1>Enter your Details</h1>')
  res.write('<form action="/submit-details/" method="POST">')
  res.write('<input type="text" name="username" placeholder="Enter Your Name" <br> <br>');
  res.write('<label for="gender">Gender:</label> <br>');
  res.write('<label id="male">Male</label>')
  res.write('<input type="radio" id="gender" name="gender" value="male"')
  res.write('<label id="female">Female</label>')
  res.write('<input type="radio" id="female" name="gender" value="female" <br><br> <br>')
  res.write('<button type="submit">Submit</button>')
  res.write('</form>')
  res.write('</body>')
  res.write('</html>')
  return res.end();
  }else if(req.url.toLowerCase() === "/submit-details/" && req.method == "POST"){
    fs.writeFileSync('user.txt', 'DUMMY');
    res.statusCode = 302;
    res.setHeader('Location', '/');
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head> <title>Complete Startup series</title> </head>')
  res.write('<body>')
  res.write('<h1>Welcome to the Billionare Club</h1>')
  res.write('</body>')
  res.write('</html>')
  return res.end();
})

const PORT = 3000;

server.listen(PORT, () =>{
  console.log(`Server is listening on the server http://localhost:${PORT}`);
});