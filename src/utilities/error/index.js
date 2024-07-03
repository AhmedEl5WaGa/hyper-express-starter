const AppError = require("../appError.js");
const { Handler } = require("./error.js");
const httpStatus = require("http-status");
function applyGlobalErrorHandler(webserver) {
  const handleError = (req) => {
    throw new AppError(
      `Can't find ${req.originalUrl} on this server!`,
      httpStatus.NOT_FOUND
    );
  };
  webserver.set_not_found_handler(handleError);
  webserver.set_error_handler(Handler);

  //Error handling
  const exitHandler = () => {
    if (HyperExpress) {
      logger.info("app closed");
      process.exit(1);
    } else {
      process.exit(1);
    }
  };

  const unexpectedErrorHandler = (error) => {
    logger.error(error);
    exitHandler();
  };

  process.on("uncaughtException", unexpectedErrorHandler);
  process.on("unhandledRejection", unexpectedErrorHandler);
}
module.exports = { applyGlobalErrorHandler };
