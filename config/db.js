
const mongoose = require('mongoose');
const MONGO_URI = "mongodb+srv://srinivasan:srini@cluster0.xsxf8tm.mongodb.net/?appName=Cluster0"
require('dotenv').config();

const connectDB = async () => {
    try {
        await mongoose.connect(MONGO_URI);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

module.exports = connectDB;