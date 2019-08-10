const express = "express";

const router = require("express").Router();

let chores = [];

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

router.delete("/chore/:id", (req, res) => {
  const id = req.params.id;
  console.log("in delete", id);
  const result = chores.filter(chore => chore.id !== Number(id));
  res.status(200).json(result);
});

router.get("/", (req, res) => {
  if (chores) {
    res.status(200).json(chores);
  }
});

router.get("/chores", (req, res) => {
  const completed = req.query.completed;

  if (completed) {
    const result = chores.filter(chore => chore.completed === completed);
  } else {
    res.status(200).json(chores);
  }
});

router.get("/people", (req, res) => {
  if (people) {
    res.status(200).json(people);
  }
});

router.get("/people/:id/chores", (req, res) => {
  const id = req.params.id;
  if (people.map(person => Number(person.id)).includes(Number(id))) {
    res.status(200).json(chores.filter(chore => chore.assignedTo == id));
  } else {
    res.status(404).json({ error: "Ain't no one with that id got chores" });
  }
});

router.post("/chore", (req, res) => {
  let chore = req.body;

  chore.id = choreID++;
  chores.push(chore);
  res.status(201).json(chores);
});

router.put("/chore/:id", (req, res) => {
  const id = req.params.id;
  const update = req.body;
  chores[id] = update;
  res.status(200).json(chores);
});

module.exports = router;
