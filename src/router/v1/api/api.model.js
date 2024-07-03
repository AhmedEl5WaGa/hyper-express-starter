const mongoose = require("mongoose");

const apiSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});
const API = mongoose.model("API", apiSchema);

module.exports = API;
