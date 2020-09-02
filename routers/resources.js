const express = require("express");
const Resource = require("../models/resources");

const router = express.Router();

router.get("/resources", async (req, res, next) => {
  try {
    const resource = await Resource.find();
    res.json(resource);
  } catch (err) {
    next(err);
  }
});

router.post("/resources", (req, res, next) => {
  const resourceData = req.body;

  Resource.create(resourceData)
    .then(resource => {
      res.status(201).json(resource);
    })

    .catch(err => {
      res.status(500).json({ message: "Cannot create a new resource." });
    });
});

module.exports = router;
