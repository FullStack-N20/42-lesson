import { logger } from '../config/index.js';
import { clubsService } from '../services/clubs.service.js';

export const clubsController = {
    async createClub(req, res) {
        try {
            logger.info('Creating new club');
            const clubData = req.body;
            const newClub = await clubsService.createClub(clubData);
            logger.info(`Club created successfully with id: ${newClub._id}`);
            res.status(201).json({
                success: true,
                message: 'Club created successfully',
                data: newClub
            });
        } catch (error) {
            logger.error('Error in createClub controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to create club'
            });
        }
    },

    async getAllClubs(req, res) {
        try {
            logger.info('Getting all clubs');
            const clubs = await clubsService.getAll();
            res.status(200).json({
                success: true,
                message: 'Clubs fetched successfully',
                data: clubs
            });
        } catch (error) {
            logger.error('Error in getAllClubs controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to fetch clubs'
            });
        }
    },

    async getClubById(req, res) {
        try {
            const { id } = req.params;
            logger.info(`Getting club with id: ${id}`);
            const club = await clubsService.getById(id);
            res.status(200).json({
                success: true,
                message: 'Club fetched successfully',
                data: club
            });
        } catch (error) {
            logger.error('Error in getClubById controller:', error);
            res.status(404).json({
                success: false,
                message: error.message || 'Club not found'
            });
        }
    },

    async updateClub(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            logger.info(`Updating club with id: ${id}`);
            const updatedClub = await clubsService.updateClub(id, updateData);
            res.status(200).json({
                success: true,
                message: 'Club updated successfully',
                data: updatedClub
            });
        } catch (error) {
            logger.error('Error in updateClub controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to update club'
            });
        }
    },

    async deleteClub(req, res) {
        try {
            const { id } = req.params;
            logger.info(`Deleting club with id: ${id}`);
            await clubsService.deleteClub(id);
            res.status(200).json({
                success: true,
                message: 'Club deleted successfully'
            });
        } catch (error) {
            logger.error('Error in deleteClub controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to delete club'
            });
        }
    }
};

