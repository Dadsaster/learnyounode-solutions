var http = require('http')

http.get(process.argv[2], function(res) {
    res.setEncoding('utf8')
    var noSpace = ''
    res.on('data', function(data) {
        noSpace += data
    })
    res.on('end', function() {
        console.log(noSpace.length)
        console.log(noSpace)
    })
})
