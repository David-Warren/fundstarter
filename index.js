// -----Part 1a - synchronous

var fs = require('fs');
var filename = "index.html";

var http = require('http');
var port = Number(process.env.PORT || 8080);

function start(resp) {
    var content = fs.readFileSync(filename);
    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write(buf);
    resp.end();
};


var server = http.createServer(start);//event emiiter 
server.listen(port,function(){
    console.log('Node app is running at port:',port);
});
