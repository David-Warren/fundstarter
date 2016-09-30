// -----Part 1a - synchronous

var fs = require('fs');
var filename = "index.html";

var http = require('http');
var port = Number(process.env.PORT || 8080);

var content = fs.readFileSync(filename, "utf8");

var run = function start(resp) {
    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.end(content);
};


var server = http.createServer(run);//event emiiter 
server.listen(port,function(){
    console.log('Node app is running at port:',port);
});
