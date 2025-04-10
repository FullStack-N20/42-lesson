import express from 'express';
import { tournamentController } from '../controllers/tournament.controller.js';

const router = express.Router();

router.post('/', tournamentController.createTournament);
router.get('/', tournamentController.getAllTournaments);
router.get('/:id', tournamentController.getTournamentById);
router.put('/:id', tournamentController.updateTournament);
router.delete('/:id', tournamentController.deleteTournament);

export default router;
