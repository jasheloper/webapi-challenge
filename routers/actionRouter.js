// router for actions

const express = require("express");

const db = require("../data/helpers/actionModel");

const router = express.Router();

// CRUD operations

router.post("/", (req, res) => {}); // CREATE data

router.get("/", (req, res) => {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error retrieving action."
      });
    });
}); // READ data

router.put("/", (req, res) => {}); // UPDATE data

router.delete("/", (req, res) => {}); // DESTORYING data

module.exports = router;
