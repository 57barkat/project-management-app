const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = async () => {
    const mongoUri = process.env.MONGO_URI;
    if (!mongoUri) {
        console.error('MONGO_URI is not defined in environment variables.');
        process.exit(1);
    }
    try {
        await mongoose.connect(mongoUri);
        console.log(`MongoDB connected: ${mongoUri}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = connectDB;
