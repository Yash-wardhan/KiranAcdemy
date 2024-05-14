const express = require('express')
const path = require('path')
const filePath = path.join(__dirname,'public','files')
//date import 
const app = express()


app.use((req,res,next)=>{
    console.log(`Current date and time = `,Date())
    next()
})
app.get('/', (req, res) => {
    res.sendFile(`${filePath}/home.html`)
})
app.get('/about', (req, res) => {
    res.sendFile(`${filePath}/about.html`)
})
app.get('/contact', (req, res) => {
    res.sendFile(`${filePath}/contact.html`)
})
app.get('/user', (req, res) => {
    res.sendFile(`${filePath}/user.html`)
})


//middleware status code 404
app.use((req,res,next)=>{
    res.status(404).sendFile(`${filePath}/404.html`)
})

Port = 3000
app.listen((Port),()=>{console.log(`server is running = ${Port}`)})