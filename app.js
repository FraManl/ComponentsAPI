const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const stateRouter = require("./routes/stateRoutes");
const viewRouter = require("./routes/viewRoutes");

const app = express();

app.enable("trust proxy");
app.use(cors());
app.use(cookieParser());
app.post(bodyParser.raw({ type: "application/json" }));
app.use(bodyParser.json());
app.options("*", cors());

app.set("view engine", "pug");
app.use(express.static(path.join(__dirname, "static")));

app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/", viewRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/requests", stateRouter);

module.exports = app;
