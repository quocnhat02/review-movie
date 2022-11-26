const User = require('../models/user');

const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  const newUser = new User({ name, email, password });

  await newUser.save();

  res.json({ user: newUser });
};

module.exports = {
  createUser,
};
