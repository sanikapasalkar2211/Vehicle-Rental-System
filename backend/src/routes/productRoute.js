import express from 'express';
import verifyUser from '../middlewares/authMiddleware.js';
import { addProduct, getProduct, productDelete, updateProduct } from '../controllers/productController.js';



const router = express.Router();

// Route to get all products
router.get("/get-products",verifyUser, getProduct);

// Route to add a new product
router.post("/add-product",verifyUser, addProduct);

//Route to update a product
router.put("/update-product",verifyUser, updateProduct);

router.delete("/delete-product",verifyUser, productDelete);


export default router; // Export the router using ES module syntax
