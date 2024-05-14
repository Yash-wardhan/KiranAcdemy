const http = require('http');
const data = require('./data');

http.createServer((req,res)=>{
    if(req.url=='/'){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write("<h1 style='color:blue'>Welcome User</h1>")
        res.end()
    }
    else if(req.url=='/data'){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.write(JSON.stringify(data))
        res.end()
    }
    else{
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write('<h1>404 Page Not Found</h1>')
        res.end()
    }
}).listen(3030);
console.log('server is running')