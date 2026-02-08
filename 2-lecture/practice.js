const http = require("http");
const server = http.createServer((req, res) => {
  console.log(req.url, req.method, req.headers);
  if(req.url.toLowerCase() === "/home"){
    res.write('<h1>Welcome to Home</h1>')
    return res.end();
  }else if(req.url.toLowerCase() === "/men"){
    res.write("<h1>Welcome to the Men section</h1>")
    return res.end();
  }else if(req.url.toLowerCase() === "/women"){
    res.write("<h2>Welcome to the women section</h2>")
    return res.end();
  }else if(req.url.toLowerCase() === "/kids"){
    res.write("<p>Welcome to the kids section</p>")
    return res.end();
  }else if(req.url.toLowerCase() === "/cart"){
    res.write("<h2>check your cart</h2>")
    return res.end();
  }
  res.write(
    `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Myntra</title>
</head>
<body>
  <header>
    <nav>
      <ul>
        <li><a href="/home">Home</a></li>
        <li><a href="/men">Men</a></li>
        <li><a href="/women">Women</a></li>
        <li><a href="/kids">Kids</a></li>
        <li><a href="/cart">🛒</a></li>
      </ul>
    </nav>
  </header>
</body>
</html>

`
  );
  res.end();
});

const PORT = 3002;

server.listen(PORT, () => {
  console.log(`Server is running on the address: http://localhost:${PORT}`);
});
