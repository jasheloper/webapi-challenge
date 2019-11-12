// router for actions

const express = require("express");

const db = require("../data/helpers/actionModel");

const router = express.Router();


// CRUD operations

router.get("/", (req, res) => {}); // READ data

router.post("/", (req, res) => {}); // CREATE data

router.put("/", (req, res) => {}); // UPDATE data

router.delete("/", (req, res) => {}); // DESTORYING data
