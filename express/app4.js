const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const filePath = path.join(__dirname,'public','files')
//middleware
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use(bodyParser.json())
const validate = (req,res,next) =>{
    const uname = req.body.name;
    const mbl = req.body.mobile;
    const age = req.body.age;
    const pattern = /^[789]\d{9}$/; 

    if(!uname || !mbl || !age){
        res.send('<p style="color:red;font-size:42px;margin:20px 0 ;text-align:center">Username and Mobile Incorrect And Age</p>')
    }
    else if(!mbl.match(pattern)){
        res.send('<p style="color:red;font-size:42px;margin:20px 0 ;text-align:center">Mobile Incorrect</p>')
    }
    else if(!(age >18 && age<45)){
        res.send('<p style="color:red;font-size:42px;margin:20px 0 ;text-align:center">Age Incorrect!!! sahi dal</p>')   
    }
    else{
        next()
    }
}

//method
app.get('/',(req,res)=>{
    res.sendFile(`${filePath}/Form.html`)
})
//post 
app.post('/submitReg',validate,(req,res)=>{
    res.send('<p style="color:blue;font-size:42px;margin:20px 0 ;text-align:center">Welcome is to Home</p>')
    app.use(validate)
})
app.listen(3000,console.log('Server is Hosted on 3000'))