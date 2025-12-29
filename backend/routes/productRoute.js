import express from 'express';
const router = express.Router();
import { getAllProducts, seedProducts } from '../controller/productController.js';

router.get('/products', getAllProducts);
router.post('/products/seed', seedProducts); // Temp route to seed data

export default router;
