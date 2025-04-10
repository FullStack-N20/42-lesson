import { logger } from '../config/index.js';
import { groupService } from '../services/group.service.js';

export const groupController = {
    async createGroup(req, res) {
        try {
            logger.info('Creating new group');
            const groupData = req.body;
            const newGroup = await groupService.createGroup(groupData);
            res.status(201).json({
                success: true,
                message: 'Group created successfully',
                data: newGroup
            });
        } catch (error) {
            logger.error('Error in createGroup controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to create group'
            });
        }
    },

    async getAllGroups(req, res) {
        try {
            logger.info('Getting all groups');
            const groups = await groupService.getAll();
            res.status(200).json({
                success: true,
                message: 'Groups fetched successfully',
                data: groups
            });
        } catch (error) {
            logger.error('Error in getAllGroups controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to fetch groups'
            });
        }
    },

    async getGroupById(req, res) {
        try {
            const { id } = req.params;
            logger.info(`Getting group with id: ${id}`);
            const group = await groupService.getById(id);
            res.status(200).json({
                success: true,
                message: 'Group fetched successfully',
                data: group
            });
        } catch (error) {
            logger.error('Error in getGroupById controller:', error);
            res.status(404).json({
                success: false,
                message: error.message || 'Group not found'
            });
        }
    },

    async getGroupsByTournament(req, res) {
        try {
            const { tournamentId } = req.params;
            logger.info(`Getting groups for tournament: ${tournamentId}`);
            const groups = await groupService.getByTournamentId(tournamentId);
            res.status(200).json({
                success: true,
                message: 'Groups fetched successfully',
                data: groups
            });
        } catch (error) {
            logger.error('Error in getGroupsByTournament controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to fetch groups'
            });
        }
    },

    async updateGroup(req, res) {
        try {
            const { id } = req.params;
            const updateData = req.body;
            logger.info(`Updating group with id: ${id}`);
            const updatedGroup = await groupService.updateGroup(id, updateData);
            res.status(200).json({
                success: true,
                message: 'Group updated successfully',
                data: updatedGroup
            });
        } catch (error) {
            logger.error('Error in updateGroup controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to update group'
            });
        }
    },

    async deleteGroup(req, res) {
        try {
            const { id } = req.params;
            logger.info(`Deleting group with id: ${id}`);
            await groupService.deleteGroup(id);
            res.status(200).json({
                success: true,
                message: 'Group deleted successfully'
            });
        } catch (error) {
            logger.error('Error in deleteGroup controller:', error);
            res.status(400).json({
                success: false,
                message: error.message || 'Failed to delete group'
            });
        }
    }
}; 