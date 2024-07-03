const hyperExpress = require("hyper-express");
const apiController = require("./api.controller");
const router = new hyperExpress.Router();

router
  .route("/")
  .get(apiController.getAllFunction)
  .post(apiController.postFunction);

router
  .route("/:id")
  .get(apiController.getFunction)
  .put(apiController.putFunction)
  .delete(apiController.deleteFunction);

module.exports = router;
