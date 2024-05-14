const express = require('express')
const app = express()
const reqFilter = require('./middleware/middleware')
const route = express.Router()
//get method
// app.use(reqFilter)

//route middleware
route.use(reqFilter)
app.get('/', (req, res) => {
    res.send('Hello World')
})
app.get('/contact', reqFilter,(req, res) => {
    res.send('contact')
})
route.get('/about', (req, res) => {
    res.send('about')
})
app.use("/",route)

//listen
PORT = 3030
app.listen(PORT, () =>console.log('server is running',PORT))