import { orders } from './orderEntity.js'; // Import mock data

export const getOrderById = (orderId) => {
  const order = orders.find((order) => order.id === orderId);
  if (!order) {
    throw new Error('Order not found');
  }
  return order;
};

export const createOrder = (orderData) => {
  const newOrder = {
    id: String(orders.length + 1), // Generate a unique ID
    ...orderData,
  };
  orders.push(newOrder);
  return newOrder;
};

export const updateOrder = (orderId, updates) => {
  const orderIndex = orders.findIndex((order) => order.id === orderId);
  if (orderIndex === -1) {
    throw new Error('Order not found');
  }
  orders[orderIndex] = { ...orders[orderIndex], ...updates };
  return orders[orderIndex];
};

export const deleteOrder = (orderId) => {
  const orderIndex = orders.findIndex((order) => order.id === orderId);
  if (orderIndex === -1) {
    throw new Error('Order not found');
  }
  orders.splice(orderIndex, 1); // Remove the order
};
