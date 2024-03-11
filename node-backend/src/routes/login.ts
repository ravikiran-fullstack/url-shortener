import express from 'express';
import User from '../models/userModel';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', async (req, res) => {
  const { username, password } = req.body;
  console.log('/login :: ', username);

  try {
    const user = await User.findOne({
      username,
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      res
        .status(200)
        .send({ message: 'Login successful', username: user.username });
    } else {
      res.status(401).send({ message: 'Login failed' });
    }
  } catch (error) {
    res.status(500).send({ message: 'Error logging in' });
  }
});

export default router;
