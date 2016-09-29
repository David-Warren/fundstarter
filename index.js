var http = require('http');
var fs = require('fs');


            /*-----Part 1a-------*/
/*
function Fundstarter(req, res) {
    var content = fs.readFileSync('index.html');
    res.writeHeader(200, { 'Content-Type' : 'text/html' });
    res.write(content);
    res.end();
}

http.createServer(Fundstarter). listen(process.env.PORT || 8080);
*/


             /*-----Part 1b------*/
/*
http.createServer(function(req,res){
    fs.readFile('index.html',function(err, data) {
	res.writeHead(200, { 'Content-Type' : 'text/html', 'Content-Length' : data.length});
	res.write(data);
	res.end();
 });
}).listen(process.env.PORT || 8080);
*/


            /*------Part 2------*/


var port = process.env.PORT || 8080;
var requestListener = function(req,res) {
    fs.stat('index.html', function(error, stats) {
	if (error) {
	    return console.log(error);
	   }
	fs.open('index.html', 'r', function(error,fd) {
	    if (error) {
		return console.log(error);
		}
	    var buffersize = stats.size;
	    var buffer = new Buffer(buffersize);
	    fs.read(fd, buffer, 0, buffer.length, null, function(error, bytesRead, buffer) {
		var data = buffer.toString('utf8');
		res.writeHeader(200, {'Content-Type': 'text/html' });
		res.write(data);
		res.end();
		});
	    });
	});
};

var server = http.createServer (requestListener);
server.listen(port);

