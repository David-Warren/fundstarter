var http = require('http');
var fs = require('fs');

//Part 1

function Fundstarter(req, res) {
    var content = fs.readFileSync('index.html');
    res.writeHeader(200, { 'Content-Type' : 'text/html' });
    res.write(content);
    res.end();
}

http.createServer(Fundstarter). listen(process.env.PORT || 8080);

var server = http.createServer(requestListener);
server.listen(port);
