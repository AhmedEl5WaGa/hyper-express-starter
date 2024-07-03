const mongoose = require("mongoose");
const env = require("./env.js");
const { logger } = require("../utilities/loggers/");
mongoose.connect(env.mongoose.url);
const db = mongoose.connection;

//you can use those whereever you like
db.on("connected", async () => {
  logger.info("Connected to database");
});
db.on("error", (err) => {
  logger.error("Database error:" + err);
});
module.exports = db;
