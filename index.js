var http = require('http')
var calculator = require('./calculator')

var server = http.createServer(function (req,res) {
    res.writeHead(200,{'Content-Type':'text/html'})
    res.end('Hello World')
})

server.listen(8081)