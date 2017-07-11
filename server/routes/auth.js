import express from 'express';
import User from '../models/user';
import jwt from 'jsonwebtoken';
import config from '../config';

let router = express.Router();

router.post('/', (req, res) => {
  const { identifier, password } = req.body;
  const user = User.findByCerdentials(identifier, password)
  if (user) {
    const token = jwt.sign({id: user.id, username: user.username}, config.jwtSecret);
    res.json({token});
  } else {
    res.status(401).json({errors: {form: 'Invalid Credentials'}});
  }
});

export default router;
