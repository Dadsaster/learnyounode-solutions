var http = require('http')
var results = []

var urls = process.argv.slice(2)

for (var i = 0; i < urls.length; i++ ) {
    results[i] = null
}

for (var i = 0; i < urls.length; i++ ) {
    (function (i) {
        var all = ''
        http.get(urls[i], function(res) {
            res.setEncoding('utf8')
            res.on('data', function(data) {
                all += data
            })
            res.on('end', function() {
                // console.log(all)
                results[i] = all
                if (results.indexOf(null) === -1) {
                    results.forEach(function(text) {
                        console.log(text)
                    })
                }
            })
        })
    })(i)
}

// First attempt

// http.get(process.argv[2], function(res){
//     res.setEncoding('utf8')
//     res.on('data', function(data){
//         all += data
//     })
//     res.on('end', function(){
//         console.log(all)
//         all = ''
//         http.get(process.argv[3], function(res2) {
//             res2.setEncoding('utf8')
//             res2.on('data', function(data){
//                 all += data
//             })
//             res2.on('end', function(){
//                 console.log(all)
//                 all = ''
//                 http.get(process.argv[4], function(res3) {
//                     res3.setEncoding('utf8')
//                     res3.on('data', function(data){
//                         all += data
//                     })
//                     res3.on('end', function(){
//                             console.log(all)
//                     })
//                 })
//             })
//         })
//     })
// })
