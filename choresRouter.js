const express = "express";

const router = require("express").Router();

let chores = [
  {
    text: "test"
  }
];

let people = [
  {
    id: 1,
    name: "York Cook"
  },
  {
    id: 2,
    name: "Lauren King"
  },
  {
    id: 3,
    name: "Team YoLo"
  }
];

let choreID = 1;

router.delete("/:id", (req, res) => {});

router.get("/", (req, res) => {
  if (chores) {
    res.status(200).json(chores);
  }
});

router.post("/chore", (req, res) => {
  let chore = req.body;

  chore.id = choreID++;
  chores.push(chore);
  res.status(201).json(chores);
});

router.put("/chore/:id", (req, res) => {});

module.exports = router;
