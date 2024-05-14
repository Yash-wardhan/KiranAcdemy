const http = require('http')

// create server
let server = http.createServer((request,response)=>{
    response.writeHead(200,{'Content-Type':'text/html'})
    // response.write('<h1>Hello Yash Wardhan</h1>')
    // response.writeHead(200,{'Content-Type':'text/html'})
    if(request.url=='/')
    {
        response.write('<h1>Home Page</h1>')
        response.end()
    }
    else if(request.url='/home'){
        response.write('<h1>Hello Yash Wardhan</h1>')
        response.end()  
    }
    else if(request.url='/about'){
        response.write('this is about page')
        response.end();
    }
    else{
        response.write('<h1>Invalid Response</h1>')
        response.end()  
    }

})
//listen server
const port = 27312
server.listen(port,()=>{
    console.log(`Server is running : localhost:${port}`)
})

const app = require('./add')
const object_Name = require('./app')
//this export function in local 


const obj = new object_Name(4)
console.log(obj)
console.log(obj.Area())
console.log(app.add(3,4))
console.log(app.sub(3,4))
console.log(app.multiply(3,4))
// console.log(object_Name)
// console.log(object_Name)
// console.log(object_Name.currDate)
// console.log(object_Name.companyName)
// object_Name.sayHello()
//this export function in global
