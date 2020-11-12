const express = require("express");

const router = express.Router();

// Import the model (burger.js) to use its database functions.
const burger = require("../models/burger.js");

//Reads all entries from database and renders them to the Client using handlebars.
router.get("/", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

//Reads all entries from the database and returns the json object of burgers array
router.get("/api/burgers", function (req, res) {
    burger.all(function (data) {
        const hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.json(hbsObject);
    });
});

//Creates a new burger and adds it to the database
router.post("/api/burgers", function (req, res) {
    burger.create(["name", "devour"], [req.body.name, req.body.devour], function (result) {
        res.json({ id: result.insertId });
    });
});

//Updates a burger using its primary key(ID) which changes devoured status
router.put("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.update({
        devour: req.body.devour
    }, condition, function (result) {
        if (result.changedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//Deletes a burger from the devoured area using its primary key(ID)
router.delete("/api/burgers/:id", function (req, res) {
    const condition = "id = " + req.params.id;

    burger.delete(condition, function (result) {
        if (result.affectedRows == 0) {
            // If no rows were changed, then the ID must not exist, so 404
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// Export routes for server.js to use.
module.exports = router;

