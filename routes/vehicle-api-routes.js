const express = require("express");
const router = express.Router();
const db = require("../models");

// Routes
// =============================================================

//get all the vehicles
router.get("/api/vehicles", (req,res) => {
    db.Vehicle.findAll({}).then(dbVehicles => {
        res.json(dbVehicles);
    });
});

//get the vehicle by id
router.get("/api/vehicles/:id", (req,res) => {
    db.Vehicle.findOne({
        where : {
            id : req.params.id
        }
    }).then(dbVehicles => {
        res.json(dbVehicles);
    })
});

module.exports = router;