const express = require('express');
const app = express();
app.set('view engine', 'ejs');


const posts = [
    {
        "title": "10 Tips for Efficient Coding",
        "author": "John Smith",
        "content": "Learn how to write cleaner and more efficient code with these practical tips."
    },
    {
        "title": "Introduction to JavaScript Frameworks",
        "author": "Emily Davis",
        "content": "Explore the fundamentals of popular JavaScript frameworks and their applications."
    },
    {
        "title": "Mastering CSS Grid Layout",
        "author": "Michael Johnson",
        "content": "Discover the power of CSS grid layout and unleash your creativity in web design."
    },
    {
        "title": "Best Practices for Version Control",
        "author": "Sarah Roberts",
        "content": "Learn essential version control practices to collaborate effectively in software development projects."
    },
    {
        "title": "Understanding Object-Oriented Programming",
        "author": "David Lee",
        "content": "Get a comprehensive overview of object-oriented programming concepts and principles."
    }
]
const course = [
    {
        "id": 1,
        "cname": "Web Development Bootcamp",
        "duration": "12 weeks",
        "fees": "$1500"
    },
    {
        "id": 2,
        "cname": "Data Science Fundamentals",
        "duration": "8 weeks",
        "fees": "$1200"
    },
    {
        "id": 3,
        "cname": "Mobile App Development Course",
        "duration": "10 weeks",
        "fees": "$1400"
    },
    {
        "id": 4,
        "cname": "Graphic Design Masterclass",
        "duration": "6 weeks",
        "fees": "$1000"
    },
    {
        "id": 5,
        "cname": "Cybersecurity Essentials",
        "duration": "8 weeks",
        "fees": "$1300"
    }
]
// Routes

// Method
app.get('/', (req, res) => {
    res.render("pages/home"); // Adjust path as per your project structure
});
app.get('/course', (req, res) => {
    res.render("pages/course",{data:course}); // Adjust path as per your project structure
});
app.get('/article', (req, res) => {
    res.render("pages/article",{data:posts}); // Adjust path as per your project structure
});

const Port = 3000; // Add 'const' before Port
app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
});
