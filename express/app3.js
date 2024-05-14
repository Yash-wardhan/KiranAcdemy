const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const filePath = path.join(__dirname,'public','files')

const app = express();
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())


app.get('/',(req,res)=>{
    res.sendFile(`${filePath}/student.html`)
})
app.post('/submitStu',(req,res)=>{
    res.send(req.body)
})
app.use((req,res,next)=>{
    console.log('Time',Date.now().toLocaleString())
    next()
})


app.listen(3000,()=>{console.log(`server is 3000`)})