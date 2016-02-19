var net = require('net')

function makeTwo(num) {
    return (num < 10 ? '0' : '') + num
}
var server = net.createServer(function (socket) {
    var date = new Date()
    var stamp = date.getFullYear() + "-"
        + makeTwo(date.getMonth() + 1) + "-"
        + makeTwo(date.getDate()) + " "
        + makeTwo(date.getHours()) + ":"
        + makeTwo(date.getMinutes())
    socket.end(stamp + "\n")
})
server.listen(process.argv[2])
