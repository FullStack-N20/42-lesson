import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { logger, db } from './config/index.js';
import { tournamentRoutes, groupRoutes, clubsRoutes } from "./routes/index.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/tournaments', tournamentRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/clubs', clubsRoutes);

const startServer = async () => {
    try {
        await db.connect();

        const PORT = process.env.PORT || 50051;
        app.listen(PORT, () => {
            logger.info(`Server running on port ${PORT}`);
        });
    } catch (error) {
        logger.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
