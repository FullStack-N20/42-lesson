import express from 'express';
import { groupController } from '../controllers/group.controller.js';

const router = express.Router();

router.post('/', groupController.createGroup);
router.get('/', groupController.getAllGroups);
router.get('/:id', groupController.getGroupById);
router.get('/tournament/:id', groupController.getGroupsByTournament);
router.put('/:id', groupController.updateGroup);
router.delete('/:id', groupController.deleteGroup);

export default router;  
