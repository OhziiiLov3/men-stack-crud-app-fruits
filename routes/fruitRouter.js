const express = require("express");
const {getFruits, newFruits, addFruit, getFruitById, deleteFruit, editFruit, updateFruit} = require("../controllers/fruitController");
const router = express.Router();


router.get("/",getFruits);
router.get("/fruits/new", newFruits);
router.post("/fruits", addFruit);
router.get("/fruits/:fruitId", getFruitById);
router.delete("/fruits/:fruitId", deleteFruit )
router.get("/fruits/:fruitId/edit", editFruit );
router.put("/fruits/:fruitId", updateFruit);



module.exports = router;