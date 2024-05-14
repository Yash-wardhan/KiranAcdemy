const express = require('express')
const app = express()


app.set('view engine', 'ejs');
const student = [
    {
        stu_id:1,
        stu_name:'Mike',
        stu_marks: 89
    },
    {
        stu_id:2,
        stu_name:'Atul',
        stu_marks: 83
    },
    {
        stu_id:3,
        stu_name:'Raj',
        stu_marks: 87
    },
    {
        stu_id:4,
        stu_name:'Aditya',
        stu_marks: 35
    },
    {
        stu_id:5,
        stu_name:'Kiran',
        stu_marks: 23
    },
]
//get method
app.get('/', (req, res) => {
    res.render('pages/home')
})
app.get('/user', (req, res) => {
    res.render('pages/user',{data: student});
})

app.listen(3000,()=>{console.log('server is ruuning 3000')})