const express = require("express");
const path = require("path");
const userRouter = require("./routes/userRoutes");
const stateRouter = require("./routes/stateRoutes");
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.set("view engine", "pug");
console.log(`${__dirname}`);

app.use(express.static(path.join(__dirname, "static")));
app.use("/", viewRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/requests", stateRouter);

module.exports = app;
