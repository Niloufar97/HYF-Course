import express from "express";
import contactsRouter from "./contacts.js"
const port = 3000;

const app = express();

app.use(express.json());

app.use("/api/contacts" , contactsRouter)

app.listen(port , () => {console.log(`listening on port ${port}`)})