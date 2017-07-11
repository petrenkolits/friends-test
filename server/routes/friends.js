import express from 'express';
import authenticate from '../middlewares/authenticate';

let router = express.Router();

router.get('/', authenticate, (req, res) => {
  res.status(201).json({ success: true });
});

export default router;
