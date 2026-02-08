const sumRequestHandler = (req, res) =>{
  console.log("in sum reuest handler", req.url);
  const body = [];
  req.on('data', chunk =>{
    body.push(chunk);
  });
  req.on('end', () => {
    const bodyStr =  Buffer.concat(body).toString();
    const params = new URLSearchParams(bodyStr);
    const bodyObject = Object.fromEntries(params);
    const result = Number(bodyObject.first) + Number(bodyObject.second);
    console.log(result);
  res.setHeader('Content-Type', 'text/html');
  res.write('<html>')
  res.write('<head> <title>Final Calculation</title> </head>')
  res.write('<body>')
  res.write(`<h1>Your sum is ${result}</h1>`)
  res.write('</body>')
  res.write('</html>')
  return res.end();

  });

};

module.exports.sumRequestHandler = sumRequestHandler;