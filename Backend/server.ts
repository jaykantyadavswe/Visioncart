import express from 'express';
import dotenv from 'dotenv';
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.route.js';
import { errorHandler } from './middleware/error.middleware.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(cookieParser());

app.use('/auth', authRoutes);
app.use(errorHandler);

app.get('/', (req, res) => {
    res.send("server running");
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});