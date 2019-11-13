// router for actions

const express = require("express");

const db = require("../data/helpers/actionModel");

const router = express.Router();

// CRUD operations

// GET :: /api/actions
router.get("/", (req, res) => {
  db.get()
    .then(actions => {
      res.status(200).json(actions);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error retrieving actions."
      });
    });
}); // READ data, pass

// GET :: /api/actions/:id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.get(id)
    .then(action => {
      res.status(200).json(action);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error getting user",
        err
      });
    });
}); // READ data, pass

// post to :: /api/actions
router.post("/", (req, res) => {
  db.insert(req.body)
    .then(action => {
      res.status(201).json(action);
    })
    .catch(error => {
      res.status(500).json({
        message: "Error adding action"
      });
    });
}); // CREATE data, pass

// UPDATE :: /api/actions/:id
router.put("/:id", (req, res) => {
  db.update(req.params.id, req.body)
    .then(update => {
      res.status(200).json(update);
    })
    .catch(err => {
      res.status(500).json({ message: "Error updating action", err });
    });
}); // UPDATE data

router.delete("/", (req, res) => {}); // DESTORYING data

module.exports = router;
