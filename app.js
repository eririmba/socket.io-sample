var http = require('http');
var clientHtml = require('fs').readFileSync('index.html');

var httpServer = http.createServer(function(req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(clientHtml);
});

httpServer.listen(8008);

var WebSocketServer = require('websocket').server;
var wsServer = new WebSocketServer({ httpServer: httpServer });

wsServer.on('request', function (req) {
  var connection = req.accept(null, req.origin);
  connection.on('message', function(msg) {
    console.log(msg.utf8Data);
  });
});

