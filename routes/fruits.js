const express = require("express");
const route = express.Router();
const fruitController = require("../controllers/fruits");

route.get("/fruits/new", fruitController.newFruit);
route.post("/fruits", fruitController.create);
route.GET("/fruits", fruitController.index);

module.exports = route;
