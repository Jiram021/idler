var http = require('http');

http.createServer(function(req, res) {
  res.write("Farm on!!!");
  res.end();
}).listen(3333);
