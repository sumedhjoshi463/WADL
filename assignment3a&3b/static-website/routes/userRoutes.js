const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const registerUser = require('../schemas/register_user');


router.use(bodyParser.json());

router.post('/register', (req, res) => {

  const { username, email, city, password, mobileNumber } = req.body;

  const newUser = new registerUser({ username, email, city, password, mobileNumber });

 
  newUser.save()
    .then(() => {
      res.status(201).json({ message: 'User created successfully' });
    })
    .catch(err => {
      console.error('Error creating user:', err);
      res.status(500).json({ error: 'Failed to create user' });
    });
});



// Route to fetch all user data except for the password field
router.get('/get_all', async (req, res) => {
  try {
    const users = await registerUser.find({}, '-password');
    res.status(200).json(users);
  } catch (err) {
    console.error('Error fetching users:', err);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

router.put('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const { username, email, city, password, mobileNumber } = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, { username, email, city, password, mobileNumber }, { new: true });
    if (!updatedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User updated successfully', updatedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully', deletedUser });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error: error.message });
  }
});



module.exports = router;
