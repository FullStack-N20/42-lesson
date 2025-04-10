import { logger } from '../config/index.js';
import Group from '../models/group.model.js';

export const groupService = {
    // Create a new group
    async createGroup(groupData) {
        try {
            logger.info('Creating new group in service');
            const group = new Group(groupData);
            await group.save();
            logger.info(`Group created successfully with id: ${group._id}`);
            return group;
        } catch (error) {
            logger.error('Error creating group:', error);
            throw new Error('Error creating group');
        }
    },

    // Get all groups
    async getAll() {
        try {
            logger.info('Fetching all groups in service');
            const groups = await Group.find();
            logger.info(`Fetched ${groups.length} groups successfully`);
            return groups;
        } catch (error) {
            logger.error('Error fetching groups:', error);
            throw new Error('Error fetching groups');
        }
    },

    // Get group by ID
    async getById(id) {
        try {
            logger.info(`Fetching group with id ${id} in service`);
            const group = await Group.findOne({ group_id: id });
            if (!group) {
                throw new Error('Group not found');
            }
            logger.info(`Group fetched successfully with id: ${group._id}`);
            return group;
        } catch (error) {
            logger.error(`Error fetching group with id ${id}:`, error);
            throw new Error(`Error fetching group with id ${id}`);
        }
    },

    // Get groups by tournament ID
    async getByTournamentId(tournamentId) {
        try {
            logger.info(`Fetching groups for tournament id ${tournamentId} in service`);
            const groups = await Group.find({ tournament_id: tournamentId });
            logger.info(`Fetched ${groups.length} groups for tournament ${tournamentId}`);
            return groups;
        } catch (error) {
            logger.error(`Error fetching groups for tournament ${tournamentId}:`, error);
            throw new Error(`Error fetching groups for tournament ${tournamentId}`);
        }
    },

    // Update group by ID
    async updateGroup(id, updateData) {
        try {
            logger.info(`Updating group with id ${id} in service`);
            const group = await Group.findOneAndUpdate(
                { group_id: id },
                updateData,
                { new: true, runValidators: true }
            );
            if (!group) {
                throw new Error('Group not found');
            }
            logger.info(`Group updated successfully with id: ${group._id}`);
            return group;
        } catch (error) {
            logger.error(`Error updating group with id ${id}:`, error);
            throw new Error(`Error updating group with id ${id}`);
        }
    },

    // Delete group by ID
    async deleteGroup(id) {
        try {
            logger.info(`Deleting group with id ${id} in service`);
            const group = await Group.findOneAndDelete({ group_id: id });
            if (!group) {
                throw new Error('Group not found');
            }
            logger.info(`Group deleted successfully with id: ${id}`);
            return group;
        } catch (error) {
            logger.error(`Error deleting group with id ${id}:`, error);
            throw new Error(`Error deleting group with id ${id}`);
        }
    }
}; 