import { getOrderById, createOrder, updateOrder, deleteOrder } from './service.js';

export const getOrder = (req, res) => {
  try {
    const { id } = req.params;
    const order = getOrderById(id);
   console.log("Hi");
  
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const createOrderHandler = (req, res) => {
  try {
    const newOrder = createOrder(req.body);
    res.status(201).json(newOrder);
    console.log("Hi");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const updateOrderDetails = (req, res) => {
  try {
    const { id } = req.params;
    const updatedOrder = updateOrder(id, req.body);
    res.json(updatedOrder);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};

export const deleteOrderHandler = (req, res) => {
  try {
    const { id } = req.params;
    deleteOrder(id);
    res.json({ message: `Order with ID ${id} deleted successfully.` });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
};
