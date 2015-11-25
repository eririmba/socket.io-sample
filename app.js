var app = require('http').createServer(handler),
    io = require('socket.io').listen(app),
    fs = require('fs');

function handler(req, res) {
  fs.readFile(__dirname + '/index.html', function(err, data) {
    res.writeHead(200);
    res.write(data);
    res.end();
  })
}

app.listen(8000);

io.sockets.on('connection', function(socket) {
  socket.on('emit_from_client', function(msg) {
    console.log(msg);
  });
});
