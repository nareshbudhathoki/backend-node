const {sumRequestHandler} = require('./sum')

const requestHandler = (req, res) => {
  console.log(req.url, req.method);
  if(req.url === '/'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Home Page</title></head>');
    res.write('<body>');
    res.write('<h2>Welcome to the Home page</h2>')
    res.write('<a href="/calculator">Go to Calculator page</a>')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }else if(req.url.toLowerCase() === '/calculator'){
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculator Page</title></head>');
    res.write('<body>');
    res.write('<h2>Welcome to the calculation page</h2>')
    res.write('<form action="/calculate-result" method="POST">')
    res.write('<input type="text" placeholder="First Num" name="first" > <br> <br>')
    res.write('<input type="text" placeholder="Second Num" name="second" > <br> <br>')
    res.write('<button type="submit">Sum</button>')
    res.write('</form>')
    res.write('</body>');
    res.write('</html>');
    return res.end();
  } else if(req.url.toLowerCase() === '/calculate-result' && req.method === "POST"){
    return sumRequestHandler(req, res);
  }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Calculator</title></head>');
    res.write('<body>');
    res.write('<h2>404 page does not found</h2>')
    res.write('<a href="/">Go to Home</a>')
    res.write('</body>');
    res.write('</html>');
    return res.end();

}

exports.requestHandler = requestHandler;