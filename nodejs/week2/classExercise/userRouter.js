import express from "express";
import users from "./userInfo.js";

const router = express.Router();

router.get("/" , (req, res) => {
    const country = req.query.country;
    if(country){
        const searchedUser = users.filter(user => user.country === country)
        res.status(200).json({data: searchedUser , message: "ok"})
    }
    else{
        res.json({data: users , message: "ok"})
    }
});

router.get("/:id" , (req, res) => {
    const userId = parseInt(req.params.id);
    const specificUser = users.find(user => user.id === userId);
    if(!specificUser){
        res.status(404).send("user not found")
    }
    res.json({data:specificUser.name , message: "ok"})
});


export default router;