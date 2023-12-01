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
    // Login an existing user
    async login(req, res) {
        try {
            const user = await User.findOne({ email: req.body.email });
            if (!user) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Invalid credentials' });
            }

            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

            res.json({ token });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // Update a user's profile whenever new data is added via other controllers/routes
    async updateProfile(req, res) {
        try {
            const user = await User.findByIdAndUpdate(req.user.id, { $set: req.body }, { new: true });
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // Fetching the user's profile data when logged in
    async getUserProfile(req, res) {
        try {
            const user = await User.findById(req.user.id).select('-password');
            res.json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // Changing a user's password
    async changePassword(req, res) {
        try {
            const user = await User.findById(req.user.id);
            const isMatch = await bcrypt.compare(req.body.currentPassword, user.password);
            if (!isMatch) {
                return res.status(400).json({ message: 'Current password is incorrect' });
            }

            const newPassword = await bcrypt.hash(req.body.newPassword, 10);
            user.password = newPassword;
            await user.save();

            res.json({ message: 'Password updated successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};
module.exports = userController;