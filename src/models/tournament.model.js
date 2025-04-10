import mongoose from 'mongoose';

const tournamentSchema = new mongoose.Schema({
    tournament_id: {
        type: Number,
        required: true,
        unique: true,
        autoIncrement: true
    },
    tournament_name: {
        type: String,
        required: true,
        unique: true,
        maxLength: 100
    },
    start_date: {
        type: Date,
        required: true
    },
    end_date: {
        type: Date,
        required: true
    },
    status: {
        type: String,
        required: true,
        maxLength: 20
    }
});

const Tournament = mongoose.model('Tournament', tournamentSchema);
export default Tournament; 