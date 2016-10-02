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

res.writeHead(200, {"Content-type":"text/html"});

fs.readFile(filename, "utf8", function(err, data) {
    if (err) throw error;
    res.write(data);
    res.end();
});

/* var run = function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content);
};
*/


//This is used in every part
var server = http.createServer(run);//event emiiter 
server.listen(port,function(){
    console.log('Node app is running at port:',port);
});
