var fs = require('fs');
var filename = "index.html";
var http = require('http');
var port = Number(process.env.PORT || 8080);

/*-----Part 1a------*/

/*
var content = fs.readFileSync(filename, "utf8");

var run = function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content);
};
*/


/*------Part 1b------*/
/*
var server = http.createServer(function(req,response) {
response.writeHead(200, {"Content-type":"text/html"});

fs.readFile(filename, "utf8", function(err, data) {
    if (err) throw error;
    response.write(data);
    response.end();
});
});

/* var run = function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content);
}; //Deleted function
*/

/*------Part 2------*/
var server = http.createServer(function(req,response) {
fs.stat(filename, function(err, stast) {
    if (err) {
	throw error;
	}
    console.log(stast);
});

response.writeHead(200, {"Content-type":"text/html"})
fs.open(filename, "r", function(err,fd) {
    var readBuffer = new Buffer(3000);
    var bufferOffset = 0;
    var bufferLength = readBuffer.length;
    var filePosition = 0;
fs.read(fd, readBuffer, bufferOffset, bufferLength, filePosition, function(err,readBytes) {
    if(err) {throw error}
    response.write(readBuffer.toString());
    response.end();
});
});
});



server.listen(port);
