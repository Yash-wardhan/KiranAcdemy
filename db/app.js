const express = require('express')
const app = express()
const reqFilter = require('./middleware/middleware')
const route = express.Router()
const bodyParser = require('body-parser')
const path = require('path')
const filePath = path.join(__dirname,'public','files')
const dbConnect = require('./database/db')
//get method
// app.use(reqFilter)
//body parser 
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())


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


app.get('/form',(req,res)=>{
    res.sendFile(`${filePath}/index.html`)
})
app.post('/submit',(req,res)=>{
    const data = req.body
    console.log(data)
    //navigate
    async function insert() {
            try {
                const dbConnection = await dbConnect();
                const collection = dbConnection.collection('Product'); // Assuming 'Product' is the name of your collection
                await collection.insertOne(data);
                console.log("Docs created");
            } catch (error) {
                console.error("Error inserting documents:", error);
            }
          }

        insert();

    res.send('okay')
})
app.use("/",route)

//listen
PORT = 3030
app.listen(PORT, () =>console.log('server is running',PORT))
