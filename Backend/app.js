import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { dbConnection } from './database/dbConnection.js'; // Updated import
import errorMiddleware from './error/error.js'; // Assuming you have an error middleware
import ReservationRouter from './routes/reservationRoute.js'; // Ensure the path is correct

dotenv.config({ path: './config/config.env' }); // Load environment variables

const app = express();

// Middleware to handle CORS
app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["POST"], // Specify allowed methods, you can add more if needed
    credentials: true,
}));

// Middleware to parse JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use the reservation router for the specified route
app.use('/api/v1/reservation', ReservationRouter);

// Initialize the database connection
dbConnection(); // Updated function call

// Middleware for handling errors
app.use(errorMiddleware);

export default app;
