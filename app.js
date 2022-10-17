const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRouter = require("./routes/userRoutes");
const stateRouter = require("./routes/stateRoutes");
const viewRouter = require("./routes/viewRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

// app.enable("trust proxy");
app.use(cookieParser());
// app.use(cors());
// app.use(cors({ origin: true, credentials: true }));

app.post(bodyParser.raw({ type: "application/json" }));
app.use(bodyParser.json());
// app.options("*", cors());

app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "static")));

app.use(express.urlencoded({ extended: true, limit: "10kb" }));

app.use("/", viewRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/requests", stateRouter);

app.use("*", (req, res, next) => {
  next(
    new AppError(
      `The url ${req.originalUrl} can't be found on this server.`,
      404
    )
  );
});

process.once("SIGUSR2", function () {
  process.kill(process.pid, "SIGUSR2");
});

process.on("SIGINT", function () {
  process.kill(process.pid, "SIGINT");
});

app.use(globalErrorHandler);

module.exports = app;
