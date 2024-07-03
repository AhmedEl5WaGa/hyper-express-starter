const v1Route = require("./v1");
const ApplyRouter = (server) => {
  server.use("/v1", v1Route);
};

module.exports = ApplyRouter;
