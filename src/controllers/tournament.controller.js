import { logger } from '../config/index.js';
import { tournamentService } from '../services/tournament.service.js';

export const tournamentController = {
    async createTournament(req, res) {
        try {
            logger.info('Creating new tournament');
            const tournamentData = req.body;
            const newTournament = await tournamentService.createTournament(tournamentData);
            res.status(201).json({
                success: true,
                message: 'Tournament created successfully',
                data: newTournament
            });
        } catch (error) {
            logger.error('Error in createTournament controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to create tournament'
            });
        }
    },

    async getAllTournaments(req, res) {
        try {
            logger.info('Getting all tournaments');
            const tournaments = await tournamentService.getAll();
            res.status(200).json({
                success: true,
                message: 'Tournaments fetched successfully',
                data: tournaments
            });
        } catch (error) {
            logger.error('Error in getAllTournaments controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to fetch tournaments'
            });
        }
    },

    async getTournamentById(req, res) {
        try {
            const { id } = req.params;
            logger.info(`Getting tournament with id: ${id}`);
            const tournament = await tournamentService.getById(id);
            res.status(200).json({
                success: true,
                message: 'Tournament fetched successfully',
                data: tournament
            });
        } catch (error) {
            logger.error('Error in getTournamentById controller:', error);
            res.status(404).json({
                success: false,
                message: error.message || 'Tournament not found'
            });
        }
    },

    async updateTournament(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            logger.info(`Updating tournament with id: ${id}`);
            const updatedTournament = await tournamentService.updateTournament(id, updateData);
            res.status(200).json({
                success: true,
                message: 'Tournament updated successfully',
                data: updatedTournament
            });
        } catch (error) {
            logger.error('Error in updateTournament controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to update tournament'
            });
        }
    },

    async deleteTournament(req, res) {
        try {
            const { id } = req.params;
            logger.info(`Deleting tournament with id: ${id}`);
            await tournamentService.deleteTournament(id);
            res.status(200).json({
                success: true,
                message: 'Tournament deleted successfully'
            });
        } catch (error) {
            logger.error('Error in deleteTournament controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to delete tournament'
            });
        }
    }
}; 