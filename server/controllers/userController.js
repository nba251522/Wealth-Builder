const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userController = {
    // Register a new user
    async register(req, res) {
        try {
            let user = await User.findOne({ email: req.body.email });
            
            if (user) {
                return res.status(400).json({ message: 'User already exists' });
            }

            user = new User({
                username: req.body.username,
                email: req.body.email,
                password: req.body.password,
            });

            await user.save();

            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
            res.status(201).json({ token });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
};