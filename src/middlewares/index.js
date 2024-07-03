const { logger } = require("../utilities/loggers");
const ApplyMiddlewares = (server) => {
  server.use((req, res, next) => {
    logger.info(`Hello from the middleware 👋 we going to ${req.originalUrl}`);
    next();
  });
};

module.exports = ApplyMiddlewares;
