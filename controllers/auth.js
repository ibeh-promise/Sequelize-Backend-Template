import User from "../models/user.js";

export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({
            where: { email }
        });

        // Check if user exists
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        // Generate JWT token
        const token = jwt.sign(
            { id: user.id, email: user.email }, // Payload
            process.env.JWT_SECRET, // Secret key (store in .env)
            { expiresIn: '7d' } // Expiration time
        );

        // Set token in HTTP-only cookie
        res.cookie('token', token, {
            httpOnly: true, // Prevents JavaScript access (XSS protection)
            secure: process.env.NODE_ENV === 'production', // HTTPS only in production
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days expiry
            sameSite: 'Strict' // Prevents CSRF attacks
        });

        // Return response with user data (excluding sensitive info)
        res.status(200).json({
            message: 'Login successful',
            user: { id: user.id, email: user.email, name: user.name }, // Don't expose password
            token // If needed for client-side storage
        });

    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};