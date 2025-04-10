import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import { logger } from './config/index.js';
import tournamentRoutes from './routes/tournament.route.js';
import groupRoutes from './routes/group.route.js';
import clubsRoutes from './routes/clubs.route.js';

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tournament_db')
    .then(() => logger.info('Connected to MongoDB'))
    .catch((err) => logger.error('MongoDB connection error:', err));

app.use('/api/tournaments', tournamentRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/clubs', clubsRoutes);

app.use((err, req, res, next) => {
    logger.error(err.stack);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

const PORT = process.env.PORT || 50051;
app.listen(PORT, () => {
    logger.info(`Server is running on port ${PORT}`);
});

