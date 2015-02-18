var http = require('http');
var endOfLine = require('os').EOL;

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hollow Http' + '\n');
});
console.log('rock-web-example website started on http://your.pc.ip.address:8080');
server.listen(8080);
console.log('Ctrl+C to terminate');
