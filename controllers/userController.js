exports.getUsers = async (req,res) => {
try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users)
    res.render("users/index.ejs",{
        users: users,
    })
} catch (error) {
    console.error("Error fetching users:", error);
}
};



exports.getUserById = async (req,res)=>{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
    
        const user = users.find(user => user.id === parseInt(req.params.id));
        if(!user){
            return res.status(404).send("User not found")
        }
        res.render("users/show.ejs",{
            user: user,
        }) 
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).send("Server error");
    }
 
};

