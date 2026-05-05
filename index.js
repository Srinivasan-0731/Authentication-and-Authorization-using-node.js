require('dotenv').config();
const express = require("express");
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

// Root Route
app.get('/', (req, res) => {
    res.json({ message: 'Server is running!' });
});

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/user', userRoutes); 

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});