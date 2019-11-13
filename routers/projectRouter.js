// router for actions

const express = require("express");

const db = require("../data/helpers/projectModel");

const router = express.Router();

// CRUD operations

// GET :: /api/actions
router.get("/", (req, res) => {
  db.get()
    .then(projects => {
      res.status(200).json(projects);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error retrieving projects."
      });
    });
}); // READ data, pass

// GET :: /api/actions/:id
router.get("/:id", (req, res) => {
  const id = req.params.id;

  db.get(id)
    .then(project => {
      res.status(200).json(project);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error getting project",
        err
      });
    });
}); // READ data, pass

// post to :: /api/actions
router.post("/", (req, res) => {
  db.insert(req.body)
    .then(project => {
      res.status(201).json(project);
    })
    .catch(error => {
      res.status(500).json({
        message: "Error adding project"
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
      res.status(500).json({ message: "Error updating project.", err });
    });
}); // UPDATE data

// DELETE /api/actions/:id 
router.delete("/:id", (req, res) => {
  db.remove(req.params.id)
    .then(deleted => {
      res.status(200).json(deleted);
    })
    .catch(err => {
      res.status(500).json({ message: "Error deleting project", err });
    });
}); // DESTORYING data

module.exports = router;
