const mongoose = require("mongoose");

const fruitSchmema = new mongoose.Schema({
    name: String,
    isReadyToEat: Boolean,
});

const Fruit = mongoose.model("Fruit", fruitSchmema); // creates model


module.exports = Fruit;
