import express from 'express';
import User from '../models/userModel';

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  console.log('/register :: ', username);

  if (username.length < 3 || password.length < 5) {
    return res.status(401).send({ message: 'Invalid username or password' });
  }

  if (username === null || password === null) {
    return res.status(401).send({ message: 'Invalid username or password' });
  }

  try {
    const user = await User.findOne({
      username,
    });

    console.log('user :: ', user);
    if (user) {
      return res.status(401).send({ message: 'Username already exists' });
    } else {
      console.log('Creating new user', username, password);
      const newUser = new User({ username: req.body.username, password: req.body.password });
      console.log('newUser :: ', newUser);
      await newUser.save();
      res.send({ newUser, message: 'User registered successfully' });
    }
  } catch (error) {
    console.log('ERROR :: ', error);
    res.status(500).send({ message: 'Error registering user' });
  }
});

export default router;
