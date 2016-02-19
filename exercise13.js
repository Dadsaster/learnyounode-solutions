var http = require("http")
var url = require("url")

function jsonUrl(time) {

    console.log(time)
    return {
        "hour": time.getHours(),
        "minute": time.getMinutes(),
        "second": time.getSeconds()
    }
}

function unixUrl(time) {
    return {"unixtime": time.getTime()}

}

var server = http.createServer(function (req, res) {
    var parsedUrl = url.parse(req.url, true)
    var time = new Date(parsedUrl.query.iso)
    res.writeHead(200, { 'Content-Type': 'application/json' })
    if (req.url.match(/\/api\/parsetime/)) {
        res.end(JSON.stringify(jsonUrl(time)))
    } else if (req.url.match(/\/api\/unixtime/)) {
        res.end(JSON.stringify(unixUrl(time)))
    }
})
server.listen(process.argv[2])



// var http = require('http');
// var url = require('url');
//
// var routes = {
//   "/api/parsetime": function(parsedUrl) {
//     d = new Date(parsedUrl.query.iso);
//     return {
//       hour: d.getHours(),
//       minute: d.getMinutes(),
//       second: d.getSeconds()
//     };
//   },
//   "/api/unixtime": function(parsedUrl) {
//     return {unixtime: (new Date(parsedUrl.query.iso)).getTime()};
//   }
// }
//
// server = http.createServer(function(request, response) {
//   parsedUrl = url.parse(request.url, true);
//   console.log("YO", url, parsedUrl)
//   resource = routes[parsedUrl.pathname];
//   if (resource) {
//     response.writeHead(200, {"Content-Type": "application/json"});
//     response.end(JSON.stringify(resource(parsedUrl)));
//   }
//   else {
//     response.writeHead(404);
//     response.end();
//   }
// });
// server.listen(process.argv[2]);
