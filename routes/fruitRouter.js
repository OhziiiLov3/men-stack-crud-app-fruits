const express = require("express");
const {getFruits, newFruits, addFruit} = require("../controllers/fruitController");
const router = express.Router();


router.get("/",getFruits);
router.get("/fruits/new", newFruits);
router.post("/fruits", addFruit);


module.exports = router;