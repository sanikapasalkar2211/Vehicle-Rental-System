import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    brand: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    rentPerDay: {
      type: Number,
      required: true,
    },
    availability: {
      type: Boolean,
      default: true,
    },
    
    seller: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    }
    
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
