const http = require('http')
const url = require('url')
// const path = require('path')

http.createServer(function(req, res){
    const obj = url.parse(req.url, true)
    const pathname = obj.path
    // const query = obj.query
    res.writeHead(200, '', {
        'content-type': 'text/html;charset=utf-8',
        'Access-Control-Allow-Origin': '*',
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE"
    })
    if (pathname === '/tab1') {
        setTimeout(function() {
            res.write('这是tab111111111111111111111111111111')
            res.end()
        }, 1000)
    } else if (pathname === '/tab2') {
        setTimeout(function() {
            res.write('这是tab222222222222222222222222222222')
            res.end()
        }, 1000)
    } else if (pathname === '/tab3') {
        setTimeout(function() {
            res.write('这是tab333333333333333333333333333333')
            res.end()
        }, 1000)
    }
}).listen('3000', 'localhost')