import dotenv from "dotenv";
dotenv.config();

import express from "express";

import connectDB from "./config/db.js";
import authRoute from "./routes/Auth.route.js";
import productRoute from "./routes/Product.route.js";


const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(express.json());

// Routes
app.use("/", authRoute);
app.use("/products", productRoute);

// Health check
app.get("/", (req, res) => {
    res.status(200).json({
        success: true,
        message: "VisionCart API is running"
    });
});

// Server
const startServer = async () => {
    try {
        await connectDB();

        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1);
    }
}

startServer();

