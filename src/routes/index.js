
const express = require('express');
const router = express.Router();

//in this file we create the routes

router.get('/', (req,res) => {
    //__dirname show the current PATH and path.join give the real path of index.html
    //res.sendFile(path.join(__dirname,'views/index.html'))
    res.render('index.html', {title: "First Website"}); //with the view engine we can use js variables
});

router.get('/contact', (req,res) => {
    //__dirname show the current PATH and path.join give the real path of index.html
    //res.sendFile(path.join(__dirname,'views/index.html'))
    res.render('contact.html', {title: "contact page"}); //with the view engine we can use js variables
});

router.get('/#', (req,res) => {
    //__dirname show the current PATH and path.join give the real path of index.html
    //res.sendFile(path.join(__dirname,'views/index.html'))
    res.render('contact.html', {title: "contact page"}); //with the view engine we can use js variables
});

module.exports = router;