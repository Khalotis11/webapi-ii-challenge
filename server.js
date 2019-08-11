const express = require("express");

const server = express();

// middleware
server.use(express.json());

server.get("/", (req, res) => {
  res.send("Welcome to the Blog API");
});

module.exports = server;
