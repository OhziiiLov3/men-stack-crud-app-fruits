const Fruit = require("../models/fruit");




exports.getFruits = async (req,res) =>{
    const allFruits = await Fruit.find();
    res.render("index.ejs", {
        fruits: allFruits
    })
}


exports.newFruits = (req,res)=>{
    res.render("fruits/new.ejs")
   };

exports.addFruit = async (req,res)=>{
  
    if(req.body.isReadyToEat === "on"){
        req.body.isReadyToEat = true;
    }else{
        req.body.isReadyToEat = false;
    }
    await Fruit.create(req.body)
  res.redirect("/");
};


exports.getFruitById = async (req,res)=>{
    const foundFruit = await Fruit.findById(req.params.fruitId);

    res.render("fruits/show.ejs",{
        fruit: foundFruit,
    })
};

exports.deleteFruit = async  (req, res)=> {
    await Fruit.findByIdAndDelete(req.params.fruitId);
  res.redirect("/");
};


exports.editFruit = async  (req, res)=> {
   const foundFruit = await Fruit.findById(req.params.fruitId)
   console.log(foundFruit)
  res.render("fruits/edit.ejs",{
    fruit: foundFruit,
  });
};


exports.updateFruit = async  (req, res)=> {
    if (req.body.isReadyToEat === "on") {
        req.body.isReadyToEat = true;
      } else {
        req.body.isReadyToEat = false;
      }
    await Fruit.findByIdAndUpdate(req.params.fruitId, req.body);
  res.redirect(`/fruits/${req.params.fruitId}`);
};







