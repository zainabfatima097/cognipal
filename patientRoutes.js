import express from 'express';
import { createOrUpdatePatient, getPatient } from '../controllers/patientController.js';
import authMiddleware from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/', authMiddleware, createOrUpdatePatient);
router.get('/', authMiddleware, getPatient);

export default router;
