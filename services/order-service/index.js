import express from 'express';
import dotenv from 'dotenv';
import orderRoutes from './routes.js';

dotenv.config();  // Load environment variables from .env file

const app = express();

// Use the ORDER_SERVICE_PORT environment variable or fallback to 5001
const PORT = process.env.ORDER_SERVICE_PORT || 5001;

app.use(express.json());  // Middleware to parse incoming JSON requests
app.use('/api/orders', orderRoutes);  // Register order routes

app.listen(PORT, () => {
  console.log(`Order Service running on http://localhost:${PORT}`);
});
