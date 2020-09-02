const express = require("express");
const Task = require("../models/tasks");

const router = express.Router();

router.get("/tasks", async (req, res, next) => {
  try {
    const task = await Task.find();
    res.json(task);
  } catch (err) {
    next(err);
  }
});

router.post("/tasks", (req, res, next) => {
  const taskData = req.body;

  Task.create(taskData)
    .then(task => {
      res.status(201).json(task);
    })

    .catch(err => {
      res.status(500).json({ message: "Cannot create a new resource." });
    });
});

module.exports = router;
