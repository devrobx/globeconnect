const express = require('express');
const bodyparser = require('body-parser');
const exphbs = require('express-handlebars');
const path = require('path')
const nodemailer = require('nodemailer');
const mailgun = require('nodemailer-mailgun-transport')


const app = express()
const port = process.env.PORT || 5000;




// Handlebars Middleware
app.engine('handlebars', exphbs({
    defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({
    extended: false
}))

//Routes 
app.get('/', (req, res) => {
    res.render('index');
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/team', (req, res) => {
    res.render('team')
})

app.get('/contact', (req, res) => {
    res.render('contact')
})

//Post for contact area
app.post('/contact', (req, res) => {
    //Send email to account.
    console.log('Data', req.body)
})





app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})