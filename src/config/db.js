import mongoose from 'mongoose';
import { logger } from './index.js';
import dotenv from 'dotenv';

dotenv.config();

export const db = {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017/Football',
    options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    },
    
    async connect() {
        try {
            await mongoose.connect(this.uri, this.options);
            logger.info('Connected to MongoDB successfully');
        } catch (error) {
            logger.error('MongoDB connection error:', error);
            process.exit(1);
        }
    }
};
