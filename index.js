const express = require("express");
const projectRouter = require("./routers/project");

const server = express();
const port = process.env.PORT || 5050;

server.use(express.json());
server.use(projectRouter);

server.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    message: "Something went wrong"
  });
});

server.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});
