const express = require("express");
const router = express.Router();

// Index
router.get("/", (req, res) => {
    res.json("Sono index");
});

// Show
router.get("/:id", (req, res) => {
    res.json("Sono show");
});

// Create
router.post("/", (req, res) => {
    res.json("Sono create");
});

// Update
router.put("/:id", (req, res) => {
    res.json("Sono update");
});

// Delete
router.delete("/:id", (req, res) => {
    res.json("Sono delete");
});


module.exports = router