import express from 'express';
import { getUser, createUser, updateUserDetails, deleteUserAccount } from './controller.js';

const router = express.Router();

// Route to get a user by ID
router.get('/:id', getUser);

// Route to create a new user
router.post('/', createUser);

// Route to update a user by ID
router.put('/:id', updateUserDetails);

// Route to delete a user by ID
router.delete('/:id', deleteUserAccount);

export default router;
