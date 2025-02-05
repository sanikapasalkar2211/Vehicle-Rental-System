import { Product } from '../models/Product.js'; 



// Get all vehicles
export const getProduct = async (req, res) => {
    console.log("user", req.user);
    
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Add a vehicle
export const addProduct = async (req, res) => {
    
    console.log("user", req.user.id);

    const seller = req.user.id
    
    const { name, brand, category, rentPerDay, availability, } = req.body;
    try {
        const product = await Product.create({ name, brand, category, rentPerDay, availability, seller });
        res.status(201).json(product);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export const updateProduct = async (req, res) => {
    try {
        const { id } = req.params; // Product ID from the request URL
        const { name, brand, category, rentPerDay, availability } = req.body; // Fields to update

        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        // Update fields if provided
        if (name) product.name = name;
        if (brand) product.brand = brand;
        if (category) product.category = category;
        if (rentPerDay) product.rentPerDay = rentPerDay;
        if (availability !== undefined) product.availability = availability;

        await product.save();
        return res.status(200).json({
            success: true,
            message: "Product updated successfully",
            product: {
                id: product._id,
                name: product.name,
                brand: product.brand,
                category: product.category,
                rentPerDay: product.rentPerDay,
                availability: product.availability,
            }
        });
    } catch (error) {
        console.error(error, "Error updating product");
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

export const productDelete = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);

        if (!deletedProduct) {
            return res.status(404).json({
                success: false,
                message: "Product not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Product deleted successfully",
        });
    } catch (error) {
        console.error(error, "Error in deleting product");
        return res.status(500).json({
            success: false,
            error: "Internal server error",
        });
    }
};


