import express from 'express';
import dotenv from 'dotenv';
import { userRoutes, orderRoutes } from './routes.js';

dotenv.config();

const app = express();
const GATEWAY_PORT = process.env.GATEWAY_PORT || 3000;
const USER_SERVICE_URL = process.env.USER_SERVICE_URL || 'http://localhost:4001';
const ORDER_SERVICE_URL = process.env.ORDER_SERVICE_URL || 'http://localhost:5001';

// Mount user and order routes
app.use(userRoutes(USER_SERVICE_URL));
app.use(orderRoutes(ORDER_SERVICE_URL));

// Default route for health check
app.get('/', (req, res) => {
  res.send('Welcome to the API Gateway');
});

// Start the server
app.listen(GATEWAY_PORT, () => {
  console.log(`API Gateway running on http://localhost:${GATEWAY_PORT}`);
});
