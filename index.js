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
var content = fs.readFile(filename, "utf8", function(err, data) {
    if (err) return console.error(err);
    console.log(data.toString());
});

var run = function(req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content);
};


//This is used in every part
var server = http.createServer(run);//event emiiter 
server.listen(port,function(){
    console.log('Node app is running at port:',port);
});
