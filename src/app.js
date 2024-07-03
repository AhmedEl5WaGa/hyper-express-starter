const HyperExpress = require("hyper-express");
const db = require("./config/db");
const env = require("./config/env");
const webserver = new HyperExpress.Server();
const { logger } = require("./utilities/loggers/");
const { Handler } = require("./utilities/error/error");
const ApplyMiddlewares = require("./middlewares");
const ApplyRouter = require("./router");
const AppError = require("./utilities/appError");
const httpStatus = require("http-status");
const { applyGlobalErrorHandler } = require("./utilities/error");

db.on("connected", async () => {
  logger.info("db connected");
  //Our middlewares
  ApplyMiddlewares(webserver);

  // //Our routes
  ApplyRouter(webserver);

  // // Error handling
  applyGlobalErrorHandler(webserver);

  webserver.listen(env.port, () => {
    logger.info(`Server is running on port ${env.port}`);
  });
});
