const express = require("express");
let users = require('./users')
const app = express();
app.get("/users" , (req , res) => {
    res.json({data: users , message: "ok"});
});

app.get("/users/:id" , (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if(!user) return res.status(404).json({data: null , message: "user not found"})
    res.json({data: user, message: "ok"});
})


const port = process.env.PORT || 3000
app.listen(port , () => {
    console.log(`listen to port ${port}`)
});