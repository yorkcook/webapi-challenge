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

router.delete("/:id", (req, res) => {});

router.get("/", (req, res) => {});

router.post("/chore", (req, res) => {});

router.put("/chore/:id", (req, res) => {});

module.exports = router;
