const User = require("../models/user.model");

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find(req.query);
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

const getUserById = async (req, res) => {
  try {
    const users = await User.findById(req.params._id);
    res.json(users);
  } catch (error) {
    res.json(error);
  }
};

const updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params._id, req.body);
    const user = await User.findById(req.params._id);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndRemove(req.params._id);
    res.json(user);
  } catch (error) {
    res.json(error);
  }
};

module.exports = { createUser, getUsers, getUserById, updateUser, deleteUser };
