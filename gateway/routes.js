import { createProxyMiddleware } from 'http-proxy-middleware';
import express from 'express';

const router = express.Router();

// User Routes
export const userRoutes = (USER_SERVICE_URL) => {
  router.use('/api/users', createProxyMiddleware({
    target: USER_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/api/users': '/api/users',  // Optional: rewrite path if needed
    },
  }));
  return router;
};

// Order Routes
export const orderRoutes = (ORDER_SERVICE_URL) => {
  router.use('/api/orders', createProxyMiddleware({
    target: ORDER_SERVICE_URL,
    changeOrigin: true,
    pathRewrite: {
      '^/api/orders': '/api/orders',  // Optional: rewrite path if needed
    },
  }));
  return router;
};
