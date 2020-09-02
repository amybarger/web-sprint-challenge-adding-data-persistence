const express = require("express");
const Project = require("../models/projects");

const router = express.Router();

router.get("/project", async (req, res, next) => {
  try {
    const project = await Project.find();
    res.json(project);
  } catch (err) {
    next(err);
  }
});

router.post("/project", (req, res, next) => {
  const projectData = req.body;

  Project.create(projectData)
    .then(project => {
      res.status(201).json(project);
    })

    .catch(err => {
      res.status(500).json({ message: "Cannot create a new project." });
    });
});

module.exports = router;
