import express from "express";
import userRouter from "./userRouter.js"
const app = express();

app.use("/users" , userRouter)


const port = 3000
app.listen(port , () => {
    console.log(`listening on port ${port}`)
})