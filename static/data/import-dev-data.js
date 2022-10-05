const fs = require("fs");

const mongoose = require("mongoose");
const dotenv = require("dotenv");
const State = require("../../models/stateModel");
const User = require("../../models/userModel");

dotenv.config({ path: "./../config.env" });

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    // useCreateIndex: true,
    // useFindAndModify: true,
  })
  .then(() => console.log("DB Connection successful"));

// const states = JSON.parse(fs.readFileSync(`${__dirname}/states.json`, "utf-8"));
const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));
console.log(users);

const importData = async () => {
  try {
    await User.create(users, { validateBeforeSave: false });
    // await Review.create(reviews);

    console.log("Data successfully loaded");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// delete data from DB
const deleteData = async () => {
  try {
    // await Tour.deleteMany();
    await User.deleteMany();

    console.log("Data successfully deleted");
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}
