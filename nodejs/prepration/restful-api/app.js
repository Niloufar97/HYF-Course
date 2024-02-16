const express = require("express");
let users = require("./users");
const { body, validationResult } = require("express-validator");

const app = express();

app.use(express.json());

// get api--------------------------------------------------------------------
app.get("/users", (req, res) => {
  res.json({ data: users, message: "ok" });
});

app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).json({ data: null, message: "user not found" });
  res.json({ data: user, message: "ok" });
});

// post api--------------------------------------------------------------------
app.post(
  "/users",
  [
    body("email", "email must be valid").isEmail(),
    body("firstname", "first name can not be empty").notEmpty(),
    body("lastname", "last name can not be empty").notEmpty(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty) {
      return res.status(400).json({
        data: null,
        errors: errors.array(),
        message: "validation error",
      });
    }
    users.push({ id: users.length + 1, ...req.body });
    res.json({ data: users, message: "ok" });
  }
);

// put api-------------------------------------------------------------------
app.put(
  "/users/:id",
  [
    body("email", "you must use email format").isEmail(),
    body("firstname", "first name can not be empty").notEmpty(),
    body("lastname", "last name can not be empty").notEmpty(),
  ],
  (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (!user) {
      return res.status(404).json({ data: null, message: "user not found" });
    }
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(400)
        .json({
          data: null,
          errors: errors.array(),
          message: "validation error",
        });
    }
    users = users.map((user) => {
      if (user.id === parseInt(req.params.id)) {
        return { ...user, ...req.body };
      }
      return user;
    });
    res.json({ data: users, message: "ok" });
  }
);

// delete api ----------------------------------------------------------------
app.delete('/users/:id' , (req, res) => {
  const user = users.find(user => user.id === parseInt(req.params.id));
  if(!user){
    return res.status(404).json({data: null , message: "user not found"})
  };
  const index = users.indexOf(user);
  users.splice(index , 1);
  res.json({data: users , message: "ok"})
})


// listen to server-----------------------------------------------------------
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listen to port ${port}`);
});
