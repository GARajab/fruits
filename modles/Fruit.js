const mongoose = require("mongoose");

const fruitSchema = new mongoose.Schema({
  name: String,
  isReadyToEat: true,
});

const Fruit = mongoose.model("Fruit", fruitSchema);

module.exports = Fruit;
