const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
    const token = req.headers['token']; // Get the token from the custom header
    console.log('Token:', token); // Log the token received
    if (!token) return res.status(401).json({ msg: 'No token, authorization denied' });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET); // Verify the token
        req.user = decoded; // Attach user data to the request object
        next(); // Proceed to the next middleware
    } catch (error) {
        console.log('Token verification error:', error.message); // Log any verification errors
        res.status(401).json({ msg: 'Token is not valid' });
    }
};

module.exports = verifyToken;