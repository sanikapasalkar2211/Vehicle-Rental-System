import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoute.js';
import cors from  'cors';


const app = express();
dotenv.config(); // Load environment variables

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON request bodies

const port = process.env.PORT || 4000;

connectDB(); // Connect to the database

// User routes
app.use('/api/v1/user', userRoutes);

// Root endpoint
app.get('/', (req, res) => {
    console.log("hello world!");
    res.send("Hello World!");
});

// Start the server
app.listen(port, (error) => {
    if (error) {
        console.log(error, "error in starting server");
        process.exit(1); // Exit process on error
    }
    console.log(`server starting at http://localhost:${port}`);
});
