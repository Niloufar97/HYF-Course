import express from "express";
import bodyParser from "body-parser";
import { meals } from "./meals.js";
const app = express();
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("hello");
});

app.get("/meals", (req, res) => {
  const randomIndex = Math.floor(Math.random() * meals.length);
  const randomFood = meals[randomIndex];
  res.json(randomFood);
});

app.get('/meals/:id' , (req ,res) => {
    const mealId = parseInt(req.params.id);
    const meal = meals.find(food => food.id === mealId);
    if (!meal){
        res.status(404).send("<h2>not found</h2>");
    }
    res.json(meal)
});

app.post('/meals' , (req , res) => {
    const newMeal = req.body;
    console.log(newMeal);
    meals.push(newMeal);
    res.status(202).send("Accepted");
})
app.listen(3001, () => {
  console.log("running");
});
