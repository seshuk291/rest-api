const router = require("express").Router();
const { getUsers, getUserById, createUser, deleteUser, updateUser } = require("../controllers/users.controller");

module.exports = router
  .get("/", getUsers)
  .post("/", createUser)
  .get("/:_id", getUserById)
  .put("/:_id", updateUser)
  .delete("/:_id", deleteUser);
