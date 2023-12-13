const User = require('../../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userResolvers = {
    Query: {
        // Fetching the user's profile data when logged in
        getUserProfile: async (_, args, context) => {
            try {
                const user = await User.findById(context.user.id).select('-password');
                return user;
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
    Mutation: {
        // Register a new user
        register: async (_, { username, email, password }) => {
            try {
                let user = await User.findOne({ email });

                if (user) {
                    throw new Error('User already exists');
                }

                user = new User({
                    username,
                    email,
                    password,
                });

                await user.save();

                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
    
                // console.log("token:", token);
                return { token, user };
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Login an existing user
        login: async (_, { email, password }) => {
            try {
                const user = await User.findOne({ email });
                if (!user) {
                    throw new Error('Invalid credentials');
                }

                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    throw new Error('Invalid credentials');
                }

                const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
                // console.log("token:", token);
                return { token, user };
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Update a user's profile
        updateProfile: async (_, { userData }, context) => {
            try {
                const user = await User.findByIdAndUpdate(context.user.id, { $set: userData }, { new: true });
                return user;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Change a user's password
        changePassword: async (_, { currentPassword, newPassword }, context) => {
            try {
                const user = await User.findById(context.user.id);
                const isMatch = await bcrypt.compare(currentPassword, user.password);
                if (!isMatch) {
                    throw new Error('Current password is incorrect');
                }

                user.password = await bcrypt.hash(newPassword, 10);
                await user.save();

                return { message: 'Password updated successfully' };
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Update a user's email
        updateEmail: async (_, { newEmail }, context) => {
            try {
                const user = await User.findByIdAndUpdate(context.user.id, { email: newEmail }, { new: true });
                return user;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Additional mutations for features like forgot password and reset password can be added later
    },
};

module.exports = userResolvers;