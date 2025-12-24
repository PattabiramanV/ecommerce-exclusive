import Product from '../models/Product.js';
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const productsData = require('../data/products.json');

// Get all products with filtering, sorting and pagination
export const getAllProducts = async (req, res) => {
    try {
        const { category, minPrice, maxPrice, rating, sort } = req.query;

        // Filtering
        let query = {};
        if (category) {
            query.category = { $regex: category, $options: 'i' };
        }
        if (minPrice || maxPrice) {
            query.price = {};
            if (minPrice) query.price.$gte = Number(minPrice);
            if (maxPrice) query.price.$lte = Number(maxPrice);
        }
        if (rating) {
            query.rating = { $gte: Number(rating) };
        }

        // Sorting
        let sortOption = {};
        if (sort === "Price: Low to High") {
            sortOption.price = 1;
        } else if (sort === "Price: High to Low") {
            sortOption.price = -1;
        } else if (sort === "Newest") {
            sortOption.createdAt = -1;
        } else {
            // Default: Most Popular (using reviewCount as proxy or just all)
            sortOption.reviewCount = -1;
        }

        const products = await Product.find(query).sort(sortOption);

        res.status(200).json({
            success: true,
            count: products.length,
            products,
        });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Seed products from JSON if DB is empty (Helper)
export const seedProducts = async (req, res) => {
    try {
        await Product.deleteMany();
        const createdProducts = await Product.insertMany(productsData);
        res.status(201).json({ success: true, count: createdProducts.length, products: createdProducts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}
