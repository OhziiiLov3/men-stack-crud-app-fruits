const express = require("express");
const {getFruits, newFruits, addFruit, getFruitById, deleteFruit} = require("../controllers/fruitController");
const router = express.Router();


router.get("/",getFruits);
router.get("/fruits/new", newFruits);
router.post("/fruits", addFruit);
router.get("/fruits/:fruitId", getFruitById);
router.delete("/fruits/:fruitId", deleteFruit )



module.exports = router;