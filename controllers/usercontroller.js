var db = require("../models");
var exports = module.exports = {}

exports.signup = function (req, res) 
{
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
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