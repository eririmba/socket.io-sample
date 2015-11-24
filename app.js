var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs');

app.listen(1337);

function handler(req, res) {
  fs.readFile(__dirname + '/index.html', function(err, data) {
    res.writeHead(200);
    res.write(data);
    res.end();
  })
}
