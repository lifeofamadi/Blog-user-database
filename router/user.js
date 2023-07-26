const express = require("express");
const router = express.Router();


const {getAllUsers, addUser, getOneUser, updateUser, deleteUser}   = require("../controllers/userController")
router.use(express.json());

//get all users
router.get("/", getAllUsers)


//create a user
router.post("/", addUser)

//get a user
router.get("/:id", getOneUser)

//update a user
router.patch("/:id", updateUser)

//delete a user
router.delete("/:id", deleteUser)

module.exports = router