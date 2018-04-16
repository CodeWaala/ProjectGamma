const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
// =============================================================

// get all customers
router.get("/api/customers", (req, res) => {
  db.Customer.findAll({}).then(customers => {
    res.json(customers);
  });
});

//get customer by id
router.get("/api/customer/:id", (req, res) => {
  db.Customer.findAll({
    where: {
      id: req.params.id
    }
  }).then(dbCustomer => {
    res.json(dbCustomer);
  });
});

//get customer by id and include orders
router.get("/api/customerorders/:id", (req,res) => {
    db.Customer.findAll({
        where: {
         id: req.params.id,
         include: [db.Order]
        }
    }).then(dbOrders => {
        res.json(dbOrders);
    });
});

//get customer by id and pending orders
router.get("/api/customerordes/pending/:id", (req, res)=> {
    db.Customer.findAll({
        where :{
            id:re.params.id,
            include: [{model: db.Order, where : {orderstatus: "pending"}}]
        }
    }).then(dbOrders => {
        res.json(dbOrders);
    });
});

//get customer by id and accepted orders
router.get("/api/customerordes/accepted/:id", (req, res)=> {
    db.Customer.findAll({
        where :{
            id:re.params.id,
            include: [{model: db.Order, where : {orderstatus: "accepted"}}]
        }
    }).then(dbOrders => {
        res.json(dbOrders);
    });
});

//get customer by id and completed orders
router.get("/api/customerordes/completed/:id", (req, res)=> {
    db.Customer.findAll({
        where :{
            id:re.params.id,
            include: [{model: db.Order, where : {orderstatus: "completed"}}]
        }
    }).then(dbOrders => {
        res.json(dbOrders);
    });
});

//create customer 
router.post("/api/customer", (req,res) => {
    db.Customer.create(req.body).then(dbCustomer => {
        res.json(dbCustomer);
    });
});

//update customer
router.put("/api/customer", (req,res) => {
    db.Customer.update(req.body, {
        where: {
            id:req.body.id
        }
    }).then(dbCustomer => {
        res.json(db.Customer);
    })
});

module.exports = router;


