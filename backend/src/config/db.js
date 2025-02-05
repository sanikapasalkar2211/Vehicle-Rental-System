import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URL;

    if (!mongoURI) {
      console.error('MONGO_URL is not defined in the .env file.');
      return;
    }

    await mongoose.connect(mongoURI); // Removed deprecated options
    console.log("Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
    process.exit(1); // Exit the process if database connection fails
  }
};

export default connectDB;