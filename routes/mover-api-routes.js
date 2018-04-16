const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
// =============================================================

// get all movers
router.get("/api/movers", (req, res) => {
  db.Mover.findAll({}).then(movers => {
    res.json(movers);
  });
});

//get mover by id
router.get("/api/mover/:id", (req, res) => {
  db.Mover.findAll({
    where: {
      id: req.params.id
    }
  }).then(dbMover => {
    res.json(dbMover);
  });
});

//get mover by id and include orders
router.get("/api/moverorders/:id", (req,res) => {
    db.Mover.findAll({
        where: {
         id: req.params.id,
         include: [db.Order]
        }
    }).then(dbOrders => {
        res.json(dbOrders);
    });
});


//get mover by id and accepted orders
router.get("/api/moverordes/accepted/:id", (req, res)=> {
    db.Mover.findAll({
        where :{
            id:re.params.id,
            include: [{model: db.Order, where : {orderstatus: "accepted"}}]
        }
    }).then(dbOrders => {
        res.json(dbOrders);
    });
});

//get mover by id and completed orders
router.get("/api/moverordes/completed/:id", (req, res)=> {
    db.Mover.findAll({
        where :{
            id:re.params.id,
            include: [{model: db.Order, where : {orderstatus: "completed"}}]
        }
    }).then(dbOrders => {
        res.json(dbOrders);
    });
});

//get mover vehicle information
router.get("/api/movervehicle/:id", (req,res) => {
    db.Mover.findAll({
        include : [db.Vehicle]
    }).then(dbMoverVehicle => {
        req.json(dbMoverVehicle);
    })
})

//create mover 
router.post("/api/mover", (req,res) => {
    db.Mover.create(req.body).then(dbMover => {
        res.json(dbMover);
    });
});

//update mover
router.put("/api/mover", (req,res) => {
    db.Mover.update(req.body, {
        where: {
            id:req.body.id
        }
    }).then(dbMover => {
        res.json(dbMover);
    })
});

module.exports = router;


