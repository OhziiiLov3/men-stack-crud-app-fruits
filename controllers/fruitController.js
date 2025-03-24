

exports.getFruits = async (req,res) =>{
    res.render("index.ejs")
}


exports.newFruits = (req,res)=>{
    res.render("fruits/new.ejs")
   };

exports.addFruit = async (req,res)=>{
  res.redirect("/fruits/new");
};




