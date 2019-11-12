const express = require("express");
const actionRouter = require("./routers/actionRouter");
const projectRouter = require("./routers/projectRouter")

const server = express();

server.use(express.json());
server.use('api/actions', actionRouter)
server.use('api/projects', projectRouter)


server.get("/", (req, res) => {
  res.send(`<h1>API is running properly</h1>
  <p>Jashele Tillman</p>`);
});



module.exports = server;
