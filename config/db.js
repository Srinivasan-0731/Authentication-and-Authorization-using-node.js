const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
    try {
        mongoose.connection.on("connected", () => console.log('Database Connected'));
        await mongoose.connect(`${process.env.MONGO_URI}/Authentication-and-Authorization`);
    } catch (error) {
        console.log(error);
    }
};

module.exports = connectDB;