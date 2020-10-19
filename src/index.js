const express = require('express');
const app = express();
const path = require('path'); //Join directories no cares if linux or windows

const indexRoutes = require('./routes/index')

//setings
app.set('port', 3000);
app.set('views',path.join(__dirname,'views')); // This for dont put.ejs in the html files and we can still using the ejs syntax
app.engine('html',require('ejs').renderFile);
app.set('view engine', 'ejs'); // here we define the view engine

//middlewares - review the users

//routes

app.use(indexRoutes);

//static files (front end)
app.use(express.static(path.join(__dirname,'/public'))) // this is necessary to call resources in html or css, without putting all the path


//Listening the server

app.listen(app.get('port'), ()=>{
    console.log("Listening in port ", app.get('port'));
});