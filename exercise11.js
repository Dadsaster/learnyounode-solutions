var http = require('http')
var fs = require('fs')

// first try

// var server = http.createServer(function (req, res) {
//     var read = fs.createReadStream(process.argv[3])
//     read.on('open', function() {
//         read.pipe(res)
//     })
//     read.on('error', function() {
//         res.end(err)
//     })
// })
// server.listen(process.argv[2])

var server = http.createServer(function (req, res) {
       fs.createReadStream(process.argv[3]).pipe(res)
     })

     server.listen(Number(process.argv[2]))
