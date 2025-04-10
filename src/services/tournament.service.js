import { logger } from '../config/index.js';
import Tournament from '../models/tournament.model.js';

export const tournamentService = {
    // Create a new tournament
    async createTournament(tournamentData) {
        try {
            logger.info('Creating new tournament in service');
            const tournament = new Tournament(tournamentData);
            await tournament.save();
            logger.info(`Tournament created successfully with id: ${tournament._id}`);
            return tournament;
        } catch (error) {
            logger.error('Error creating tournament:', error);
            throw new Error('Error creating tournament');
        }
    },

    // Get all tournaments
    async getAll() {
        try {
            logger.info('Fetching all tournaments in service');
            const tournaments = await Tournament.find();
            logger.info(`Fetched ${tournaments.length} tournaments successfully`);
            return tournaments;
        } catch (error) {
            logger.error('Error fetching tournaments:', error);
            throw new Error('Error fetching tournaments');
        }
    },

    // Get tournament by ID
    async getById(id) {
        try {
            logger.info(`Fetching tournament with id ${id} in service`);
            const tournament = await Tournament.findOne({ tournament_id: id });
            if (!tournament) {
                throw new Error('Tournament not found');
            }
            logger.info(`Tournament fetched successfully with id: ${tournament._id}`);
            return tournament;
        } catch (error) {
            logger.error(`Error fetching tournament with id ${id}:`, error);
            throw new Error(`Error fetching tournament with id ${id}`);
        }
    },

    // Update tournament by ID
    async updateTournament(id, updateData) {
        try {
            logger.info(`Updating tournament with id ${id} in service`);
            const tournament = await Tournament.findOneAndUpdate(
                { tournament_id: id },
                updateData,
                { new: true, runValidators: true }
            );
            if (!tournament) {
                throw new Error('Tournament not found');
            }
            logger.info(`Tournament updated successfully with id: ${tournament._id}`);
            return tournament;
        } catch (error) {
            logger.error(`Error updating tournament with id ${id}:`, error);
            throw new Error(`Error updating tournament with id ${id}`);
        }
    },

    // Delete tournament by ID
    async deleteTournament(id) {
        try {
            logger.info(`Deleting tournament with id ${id} in service`);
            const tournament = await Tournament.findOneAndDelete({ tournament_id: id });
            if (!tournament) {
                throw new Error('Tournament not found');
            }
            logger.info(`Tournament deleted successfully with id: ${id}`);
            return tournament;
        } catch (error) {
            logger.error(`Error deleting tournament with id ${id}:`, error);
            throw new Error(`Error deleting tournament with id ${id}`);
        }
    }
}; 