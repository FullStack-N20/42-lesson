import { logger } from '../config/index.js';
import mongoose from 'mongoose';

export const clubsService = {
    // Create a new club
    async createClub(clubData) {
        try {
            logger.info('Creating new club in service');
            const Club = mongoose.model('Club');
            const club = new Club(clubData);
            await club.save();
            logger.info(`Club created successfully with id: ${club._id}`);
            return club;
        } catch (error) {
            logger.error('Error creating club:', error);
            throw new Error('Error creating club');
        }
    },

    // Get all clubs
    async getAll() {
        try {
            logger.info('Fetching all clubs in service');
            const clubs = await mongoose.model('Club').find();
            logger.info(`Fetched ${clubs.length} clubs successfully`);
            return clubs;
        } catch (error) {
            logger.error('Error fetching clubs:', error);
            throw new Error('Error fetching clubs');
        }
    },

    // Get a club by ID
    async getById(id) {
        try {
            logger.info(`Fetching club with id ${id} in service`);
            const club = await mongoose.model('Club').findById(id);
            if (!club) {
                throw new Error('Club not found');
            }
            logger.info(`Club fetched successfully with id: ${club._id}`);
            return club;
        } catch (error) {
            logger.error(`Error fetching club with id ${id}:`, error);
            throw new Error(`Error fetching club with id ${id}`);
        }
    },

    // Update a club by ID
    async updateClub(id, updateData) {
        try {
            logger.info(`Updating club with id ${id} in service`);
            const Club = mongoose.model('Club');
            const club = await Club.findByIdAndUpdate(
                id,
                updateData,
                { new: true, runValidators: true }
            );
            if (!club) {
                throw new Error('Club not found');
            }
            logger.info(`Club updated successfully with id: ${club._id}`);
            return club;
        } catch (error) {
            logger.error(`Error updating club with id ${id}:`, error);
            throw new Error(`Error updating club with id ${id}`);
        }
    },

    // Delete a club by ID
    async deleteClub(id) {
        try {
            logger.info(`Deleting club with id ${id} in service`);
            const Club = mongoose.model('Club');
            const club = await Club.findByIdAndDelete(id);
            if (!club) {
                throw new Error('Club not found');
            }
            logger.info(`Club deleted successfully with id: ${id}`);
            return club;
        } catch (error) {
            logger.error(`Error deleting club with id ${id}:`, error);
            throw new Error(`Error deleting club with id ${id}`);
        }
    }
};