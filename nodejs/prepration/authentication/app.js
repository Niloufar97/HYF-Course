const express = require("express");
const homeRoute = require("./routes/home-routes")

const app = express();

app.use("/" , homeRoute)

app.listen(3000 , () => {
    console.log("listen to port 3000")
})