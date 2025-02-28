import express from 'express';
import { getOrder, createOrderHandler, updateOrderDetails, deleteOrderHandler } from './controller.js';

const router = express.Router();

// Route to get an order by ID
router.get('/:id', getOrder);

// Route to create a new order
router.post('/', createOrderHandler);

// Route to update an order by ID
router.put('/:id', updateOrderDetails);

// Route to delete an order by ID
router.delete('/:id', deleteOrderHandler);

export default router;
