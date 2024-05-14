const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')
const filePath = path.join(__dirname,'public','files')
const app = express()

//method
//post method use middleware 
// app.use(express.urlencoded({
//     extended:true
// }))
//middleware 
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())


app.post('/submitForm',(req,res)=>{
    console.log(req.body.uname)
    console.log(req.body.email)
    console.log(req.body.message)
    res.redirect('/about')
})
//get method
app.post('/cal',(req,res)=>{
    console.log(req.body)
    var fnumber = parseInt(req.body.fnumber)
    var snumber = parseInt(req.body.snumber)
    var operation = req.body.operation
    console.log(operation)
    if(operation =='+'){
        console.log(fnumber+snumber)
    }
    else if(operation =='-'){
        console.log(fnumber-snumber)
    }
   else if(operation =='*')
   {
        console.log(fnumber*snumber)
    }
   else if(operation =='/'){
        console.log(fnumber/snumber)
    }
    res.redirect('/success')
})
app.get('/calculator',(req,res)=>{
    res.sendFile(`${filePath}/calculator.html`)
})
app.get('/success', (req, res) => {
    res.sendFile(`${filePath}/success.html`)
})
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/home',(req,res)=>{
    res.sendFile(`${filePath}/home.html`)
})

app.get('/about',(req,res)=>{
    res.sendFile(`${filePath}/about.html`)
})

app.get('/contact',(req,res)=>{
    res.sendFile(`${filePath}/contact.html`)
})

// app.get('/about', (req, res) => {
//     res.send('About Page<a href="/home">Back to Home</a>')
// })
// app.get('/home',(req,res)=>{
//     var name = req.query.name;
//     var age = req.query.age;
//     res.send('<h1>Home page<h1>'+name+age)
// })
// app.get("/help",(req,res)=>{
//     res.send([
//         {
//             name: 'Yash',
//             country:'India'
//         },
//         {
//             name: 'John',
//             country:'India'
//         },
//     ])
// })

PORT=3030
app.listen(PORT,()=>{console.log(`Server Is Running in ${PORT}`)})