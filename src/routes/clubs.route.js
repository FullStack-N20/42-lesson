import express from 'express';
import { clubsController } from '../controllers/clubs.controller.js';

const router = express.Router();


router.post('/', clubsController.createClub);
router.get('/', clubsController.getAllClubs);
router.get('/:id', clubsController.getClubById);
router.put('/:id', clubsController.updateClub);
router.delete('/:id', clubsController.deleteClub);

export default router; 