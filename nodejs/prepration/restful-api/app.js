const express = require("express");

const app = express();
const usersRoutes = require("./routes/user-routes");
const homeRoutes = require("./routes/home-routes")

app.use(express.json());
app.use("/" , homeRoutes)
app.use('/api/users', usersRoutes);



// listen to server-----------------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listen to port ${port}`);
});
