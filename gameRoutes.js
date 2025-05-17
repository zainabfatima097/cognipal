import express from 'express';
import { submitGameData, getUserGameData } from '../controllers/gameController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/submit', authMiddleware, submitGameData);
router.get('/mydata', authMiddleware, getUserGameData);

export default router;
