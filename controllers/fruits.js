const Fruit = require("../modles/Fruit");

const newFruit = (req, res) => {
  res.render("fruits/new.ejs");
};

const create = async (req, res) => {
  if (req.body.isReadyToEat == "on") {
    req.body.isReadyToEat = true;
  } else {
    req.body.isReadyToEat = false;
  }
  await Fruit.create(req.body);
  res.redirect("/fruits/new");
};

module.exports = {
  newFruit,
  create,
};
