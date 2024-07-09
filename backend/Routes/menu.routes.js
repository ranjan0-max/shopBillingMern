const express = require("express");
const MenuController = require("../Controllers/menu.controller");
const { authJwt } = require("../Middleware/apiAuth.middleware");

const router = express.Router();

router
  .get("/", authJwt, MenuController.getAllMenus)
  .get("/search", MenuController.getSearchService)
  .post("/", MenuController.postMenu);

module.exports = router;
