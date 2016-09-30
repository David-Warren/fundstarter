// -----Part 1a - synchronous

var fs = require('fs');
var filename = "index.html";

var http = require('http');
var port = Number(process.env.PORT || 8080);

/*var requestListener = function (req, res){ 
    res.writeHead(200, {"Content-type":"text/plain"}); 
    res.end("SIMPLE SIMPLE and fun" );
}
*/

var buffer = fs.readFileSync(filename, "utf8");

function start(resp) {
    resp.writeHead(200, {"Content-Type": "text/html"});
    resp.write(buf);
    resp.end();
};


var server = http.createServer(start);//event emiiter 
server.listen(port,function(){
    console.log('Node app is running at port:',port);
});
