const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    try {
        // Get token from cookies (preferred) or Authorization header (fallback)
        const token = req.cookies?.token || req.headers.authorization?.split(' ')[1];

        // Check if token exists
        if (!token) {
            return res.status(401).json({ message: 'Access denied. No token provided.' });
        }

        // Verify token
        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                if (err.name === 'TokenExpiredError') {
                    return res.status(401).json({ message: 'Token expired. Please log in again.' });
                }
                return res.status(401).json({ message: 'Invalid token.' });
            }

            // Attach user data to request object
            req.user = decoded;
            next(); // Proceed to the next middleware/route
        });

    } catch (error) {
        console.error('❌ Auth Middleware Error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = authMiddleware;