var db = require("../models");
var exports = module.exports = {}

exports.signup = function (req, res) 
{
    console.log('signup is working');
    res.render('signup');
}

exports.signin = function (req, res) 
{
    res.render('signin');
}

exports.logout = function (req, res) {
    req.session.destroy(function (err) {
        res.redirect('/signin');
    });
}