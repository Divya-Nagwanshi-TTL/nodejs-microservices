import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './routes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4001;

app.use(express.json()); // Middleware to parse JSON
app.use('/api/users', userRoutes); // Use the user routes

app.listen(PORT, () => {
  console.log(`User Service running on http://localhost:${PORT}`);
});
