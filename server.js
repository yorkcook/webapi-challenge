const express = require("express");

const server = express();

const choresRouter = require("./choresRouter");

// function logger(req, res, next) {
//   const method = req.method;
//   const url = req.url;
//   const timestamp = Date.now();
//   console.log(`You made a ${method} request to ${url} at ${timestamp}!`);
//   next();
// }

server.use(express.json());
// server.use(logger);

server.use("/", choresRouter);
server.get("/test", (req, res) => {
  res.status(200).json({
    thoughtOfTheDay: process.env.TOTD
  });
});

module.exports = server;
