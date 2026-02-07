const express = require('express');
const verifyToken = require('../middleware/verifyToken'); // Ensure you have this file
const User = require('../models/User');

const router = express.Router();

router.get('/profile', verifyToken, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password'); 
        if (!user) return res.status(404).json({ msg: 'User not found' });
        res.json(user); 
    } catch (error) {
        res.status(500).json({ msg: 'Server error' });
    }
});

module.exports = router;