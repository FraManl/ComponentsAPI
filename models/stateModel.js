const mongoose = require("mongoose");
const slugify = require("slugify");

const stateSchema = new mongoose.Schema({
  partNumber: {},
  componentInput: {},
  componentOutput: {
    responses: [],
  },
  fileItem: [],
  queryOptions: ,
});

const State = mongoose.model("State", stateSchema);

module.exports = State;
