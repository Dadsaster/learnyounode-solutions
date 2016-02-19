var http = require('http');

http.get(process.argv[2], function(res) {
    // orginal solution

    // var buffers = '';
    // res.on("data", function(data){
    //     buffers += data + "\n"
    // })
    // res.on("end", function() {
    //     console.log(buffers)
    // })
    res.setEncoding('utf8')
    res.on('data', console.log)
    res.on('error', console.error)
})
