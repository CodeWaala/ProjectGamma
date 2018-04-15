const express = require('express');
const passport   = require('passport')
const session    = require('express-session')
const bodyParser = require('body-parser')
const mysql = require('mysql');

//Express App
var app = express();
var PORT = process.env.PORT || 8080;

//Models
const db = require("./models");

// BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Sync Database
db.sequelize.sync().then(function() {

    app.listen(PORT, function(err) {
 
        if (!err)
            console.log("connection is working");
        else console.log(err)
     
    });
 
    console.log('Database is working')
 
}).catch(function(err) {
 
    console.log(err, "Database error")
 
});