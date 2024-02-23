let users = require("./users");
const { body, validationResult } = require("express-validator");

const getAllUsers = (req, res) => {
    res.json({ data: users, message: "ok" });
};

const getUser =  (req, res) => {
    const user = users.find((user) => user.id === parseInt(req.params.id));
    if (!user)
      return res.status(404).json({ data: null, message: "user not found" });
    res.json({ data: user, message: "ok" });
};

const createUser = (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        data: null,
        errors: errors.array(),
        message: "validation error",
      });
    }
    users.push({ id: users.length + 1, ...req.body });
    res.json({ data: users, message: "ok" });
};

const updateUser =  (req, res) => {
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
};

const deleteUser = (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if(!user){
      return res.status(404).json({data: null , message: "user not found"})
    };
    const index = users.indexOf(user);
    users.splice(index , 1);
    res.json({data: users , message: "ok"})
};

module.exports ={
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
}