import express from 'express'
import { getAllUsersController, getUserController, loginController, registerController, resetPasswordController, updateUserController, userDeleteController } from './../controllers/userController.js';

const router = express.Router();

// Register a new user
router.post("/register", registerController);

// Login user
router.post("/login", loginController);

// Update name and email
router.put("/update/:id", updateUserController);

// Reset password (with security question)
router.post("/reset-password", resetPasswordController);

// Get a single user by ID (excluding password)
router.get("/get-user/:id", getUserController);

// Get all users (excluding passwords)
router.get("/get-users", getAllUsersController);

// Delete a user by ID
router.delete("/delete/:id", userDeleteController);

const userRoutes = router;
export default userRoutes;
