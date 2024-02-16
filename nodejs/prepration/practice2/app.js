const express = require("express");
let users = require("./users");
const { body, validationResult } = require("express-validator");

const app = express();

app.use(express.json());

app.get("/users", (req, res) => {
  res.json({ data: users, message: "ok" });
});

app.get("/users/:id", (req, res) => {
  const user = users.find((user) => user.id === parseInt(req.params.id));
  if (!user)
    return res.status(404).json({ data: null, message: "user not found" });
  res.json({ data: user, message: "ok" });
});

app.post(
  "/users",
  [
    body("email", "email must be valid").isEmail(),
    body("firstname", "first name can not be empty").notEmpty(),
    body("lastname", "last name can not be empty").notEmpty(),
  ],
  (req, res) => {
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
    users.push({ id: users.length + 1, ...req.body });
    res.json({ data: users, message: "ok" });
  }
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listen to port ${port}`);
});
