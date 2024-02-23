const express = require("express");
const { body, validationResult } = require("express-validator");
const userController = require("../controllers/users-controller")
const router = express.Router();


// get api--------------------------------------------------------------------
router.get("/", userController.getAllUsers);
  
router.get("/:id", userController.getUser);
  
// post api--------------------------------------------------------------------
router.post(
    "/",
    [
      body("email", "email must be valid").isEmail(),
      body("firstname", "first name can not be empty").notEmpty(),
      body("lastname", "last name can not be empty").notEmpty(),
    ],
    userController.createUser
  );
  
// put api-------------------------------------------------------------------
router.put(
    "/:id",
    [
      body("email", "you must use email format").isEmail(),
      body("firstname", "first name can not be empty").notEmpty(),
      body("lastname", "last name can not be empty").notEmpty(),
    ],
    userController.updateUser
  );
  
// delete api ----------------------------------------------------------------
router.delete('/:id' , userController.deleteUser);

module.exports = router