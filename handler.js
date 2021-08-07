const serverless = require("serverless-http");
const express = require("express");
const app = express();

const tasksRouter = require("./routes/tasks");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/tasks', tasksRouter);

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
