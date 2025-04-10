import mongoose from 'mongoose';

const groupSchema = new mongoose.Schema({
    group_id: {
        type: Number,
        required: true,
        unique: true,
        autoIncrement: true
    },
    group_name: {
        type: String,
        required: true,
        maxLength: 100
    },
    tournament_id: {
        type: Number,
        required: true,
        ref: 'Tournament'
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});

const Group = mongoose.model('Group', groupSchema);
export default Group; 