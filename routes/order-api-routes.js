const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
// =============================================================

//get all the Orders
router.get("/api/Orders", (req, res) => {
   db.Order.findAll({}).then(dbOrders => {
       res.json(dbOrders);
   });
});

//get all the orders by id 
router.get("/api/orders/:id", (req, res) => {
    db.Order.findAll({
        where :{
            id : req.params.id
        }
    }).then(dbOrders => {
        res.json(dbOrders);
    })
})

//get all the Orders // pending
router.get("/api/orders/pending", (req,res) => {
    db.Order.findAll({
          where : {
              orderstatus : "pending"
          }
    }).then(dbOrders => {
        res.json(dbOrders);
    });
});

//get all the orders // accepted
router.get("/api/orders/accepted", (req, res) => {
    db.Order.findAll({
         where : {
             orderstatus: "accepted"
         }
    }).then(dbOrders => {
        res.json(dbOrders);
    });
});

//get all the orders // completed
router.get("/api/orders/completed", (req,res) => {
    db.Order.findAll({
       where : {
           orderstatus: "completed"
       }
    }).then(dbOrders => {
        res.json(dbOrders);
    })
});

module.exports = router;

