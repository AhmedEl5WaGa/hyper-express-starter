const hyperExpress = require("hyper-express");
const router = new hyperExpress.Router();
const apiRoute = require("./api/api.routes");
const defaultRoutes = [{ path: "/api", route: apiRoute }];
defaultRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
module.exports = router;
