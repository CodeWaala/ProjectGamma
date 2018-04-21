// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var session = require("express-session");
var passport = require("passport");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
// parse application/json
app.use(bodyParser.json());

//Static directory
app.use(express.static("public"));

// Passport

app.use(session({ secret: 'projectgamma',resave: true, saveUninitialized:true})); // session secret

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// Routes
// =============================================================
const userApiRoutes = require("./routes/user-api-routes.js");
const moverApiRoutes = require("./routes/mover-api-routes.js");
const customerApiRoutes = require("./routes/customer-api-routes.js");
const orderApiRoutes = require("./routes/order-api-routes.js");
const vehicleApiRoutes = require("./routes/vehicle-api-routes.js");

app.use(userApiRoutes);
app.use(moverApiRoutes);
app.use(customerApiRoutes);
app.use(vehicleApiRoutes);
app.use(orderApiRoutes);

// //load passport strategies
// require('./config/passport/passport.js')(passport, db.user); 

// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({force:true}).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
