const http = require('http')
const studentData = require('./public/student.json')


http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.write(JSON.stringify(studentData))
        res.end()
    }
    else if(req.url=="/magic"){
        res.writeHead(200,{'Content-Type':'application/json'})
        var data = studentData.filter((item)=>{
            return item.project 
            == "Smart City Initiative"
        })
        res.write(JSON.stringify(data))
        res.end()
    }

}).listen(3000,console.log('Server is Running'))

const http = require('http')
const studentData = require('./public/student.json')


http.createServer((req,res)=>{
    if(req.url=="/"){
        res.writeHead(200,{'Content-Type':'application/json'})
        res.write(JSON.stringify(studentData))
        res.end()
    }
    else if(req.url=="/magic"){
        res.writeHead(200,{'Content-Type':'application/json'})
        var data = studentData.filter((item)=>{
            return item.project 
            == "Smart City Initiative"
        })
        res.write(JSON.stringify(data))
        res.end()
    }

}).listen(3000,console.log('Server is Running'))
const http = require('http')
const studentData = require('./public/student.json')


