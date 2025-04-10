import mongoose from 'mongoose';

const clubSchema = new mongoose.Schema({
    club_id: {
        type: Number,
        required: true,
        unique: true,
        autoIncrement: true
    },
    club_name: {
        type: String,
        required: true,
        unique: true,
        maxLength: 100
    },
    city: {
        type: String,
        required: true,
        maxLength: 100
    },
    country: {
        type: String,
        required: true,
        maxLength: 100
    },
    founded_year: {
        type: Number
    }
});


const Club = mongoose.model('Club', clubSchema);
export default Club; 