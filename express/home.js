// express 
const express = require('express')
const app = express()
const reqFilter = require('./middleware/middleware')
//middleware 
app.use(reqFilter)
//get method
app.get('/', (req, res) => {
    res.send('Welcome to My Home Page')
})
app.get('/about', (req, res) => {
    res.send('Welcome to My about Page')
})
app.get('/contact', (req, res) => {
    res.send('Welcome to My Contact Page')
})
app.get('/setting', (req, res) => {
    res.send('Welcome to My setting Page')
})

//listen
app.listen(4000,console.log('Server is running at 4000'))


//request filter



// /home?age=23 //age >= 18 "Middleware -- next --next()"
// /about?age=23
// /geedy?   //error by middleware msg - please provide a, age <=18 you are under age 