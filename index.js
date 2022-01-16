import http from "http";

const server = http.createServer((req, res) => {
  console.log("req", req);
  console.log("res", res);
  res.end("Hello World");
  res.writeHead(200, { "Content-Type": "application/json" });
});

server.listen(3000);

//--------------------------------------------------

import express from "express";
const app = express();

app.get("/", function (req, res) {
  res.send("Started express");
});

app.get("/api/characters", (req, res) =>
  res.send({
    results: [
      {
        name: "John",
      },
    ],
    sucess: "true",
  })
);

app.listen(4002);
