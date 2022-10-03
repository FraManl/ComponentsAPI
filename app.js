const express = require("express");
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.use("/", viewRouter);

module.exports = app;
