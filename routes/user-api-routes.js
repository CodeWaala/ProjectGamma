const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
// =============================================================


//get all the users
router.get("/api/users", (req, res) => {
  db.User.findAll({}).then(users => {
      res.json(users);
  });
});

//get user by id
router.get("/api/user/:id", (req, res) => {
  db.User.findOne({
      where: {
          id: req.params.id
      }
  }).then(user => {
      console.log(user);
      res.json(user);
  });
});

//post a new user
router.post("/api/user", (req, res) => {
   db.User.create(req.body).then(dbuser => {
       res.json(dbuser);
   });
});

//get all the users//include movers
router.get("/api/users/mover", (req,res) => {
    db.User.findAll({
        include: [db.Mover]}
    ).then(usersmovers => {
         res.json(usersmovers);
    })
});

//get all the users// include customers
router.get("/api/users/customer", (req, res)=> {
    db.User.findAll({
        include: [db.Customer]}
    ).then(usercustomer => {
       res.json(usercustomer);
    })
});

module.exports = router;