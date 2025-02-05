import { comparePassword, hashPassword } from "../helpers/userHelper.js";
import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

// Helper function for consistent error handling
const handleError = (res, errorMessage, statusCode = 500, error = null) => {
    if (error) console.error(errorMessage, error.message || error);
    else console.error(errorMessage);
    return res.status(statusCode).json({
        success: false,
        message: errorMessage,
    });
};

// User registration controller
export const registerController = async (req, res) => {
    try {
        const { name, email, password,} = req.body;

        // Validate input
        if (!name || !email || !password) {
            return res.status(400).json({
                success: false,
                message: "Name, email, and password are required",
            });
        }

        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "User already registered",
            });
        }

        // Hash the password
        const hashedPassword = await hashPassword(password);

        // Create a new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            //favoritePlace, // Optional: Consider hashing this too
        });

        const savedUser = await newUser.save();

        return res.status(201).json({
            success: true,
            message: "User registered successfully",
            user: { id: savedUser._id, name: savedUser.name, email: savedUser.email },
        });
    } catch (error) {
        return handleError(res, "Error in user registration", 500, error);
    }
};

// User login controller
export const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validate input
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const isMatch = await comparePassword(password, user.password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials",
            });
        }

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
            expiresIn: process.env.JWT_EXPIRY || "5d",
        });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            token,
        });
    } catch (error) {
        return handleError(res, "Error in user login", 500, error);
    }
};

// User update controller
export const updateUserController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, email } = req.body;

        // Validate input
        if (!name && !email) {
            return res.status(400).json({
                success: false,
                message: "Name or email must be provided for update",
            });
        }

        const user = await User.findById(id);
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if (name) user.name = name;
        if (email) user.email = email;

        await user.save();

        return res.status(200).json({
            success: true,
            message: "User updated successfully",
            user: { id: user._id, name: user.name, email: user.email },
        });
    } catch (error) {
        return handleError(res, "Error updating user", 500, error);
    }
};

// Password reset controller
export const resetPasswordController = async (req, res) => {
    try {
        const { email, securityAnswer, newPassword } = req.body;

        // Validate input
        if (!email || !securityAnswer || !newPassword) {
            return res.status(400).json({
                success: false,
                message: "Email, security answer, and new password are required",
            });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        if (user.favoritePlace !== securityAnswer) {
            return res.status(401).json({
                success: false,
                message: "Security answer is incorrect",
            });
        }

        const hashedPassword = await hashPassword(newPassword);
        user.password = hashedPassword;
        await user.save();

        return res.status(200).json({
            success: true,
            message: "Password reset successfully",
        });
    } catch (error) {
        return handleError(res, "Error resetting password", 500, error);
    }
};

// Delete user controller
export const userDeleteController = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedUser = await User.findByIdAndDelete(id);
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            message: "User deleted successfully",
        });
    } catch (error) {
        return handleError(res, "Error deleting user", 500, error);
    }
};

// Get a single user (exclude password)
export const getUserController = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id, "-password");
        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        return res.status(200).json({
            success: true,
            user,
        });
    } catch (error) {
        return handleError(res, "Error fetching user", 500, error);
    }
};

// Get all users (exclude passwords)
export const getAllUsersController = async (req, res) => {
    try {
        const users = await User.find({}, "-password");
        return res.status(200).json({
            success: true,
            users,
        });
    } catch (error) {
        return handleError(res, "Error fetching all users", 500, error);
    }
};
