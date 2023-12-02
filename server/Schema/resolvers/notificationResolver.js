const Notification = require('../../models/Notification');

const notificationResolvers = {
    Query: {
        // Fetch all notifications for a user
        getNotifications: async (_, args, context) => {
            try {
                const notifications = await Notification.find({ user: context.user.id });
                return notifications;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Fetch a single notification
        getNotification: async (_, { id }, context) => {
            try {
                const notification = await Notification.findById(id);
                if (!notification) {
                    throw new Error('Notification not found');
                }
                return notification;
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
    Mutation: {
        // Create a new notification
        createNotification: async (_, { notificationData }, context) => {
            try {
                const newNotification = new Notification({
                    ...notificationData,
                    user: context.user.id
                });
                return await newNotification.save();
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Update a notification
        updateNotification: async (_, { id, updateData }, context) => {
            try {
                const updatedNotification = await Notification.findByIdAndUpdate(
                    id,
                    updateData,
                    { new: true }
                );
                if (!updatedNotification) {
                    throw new Error('Notification not found');
                }
                return updatedNotification;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Delete a notification
        deleteNotification: async (_, { id }, context) => {
            try {
                const notification = await Notification.findById(id);
                if (!notification) {
                    throw new Error('Notification not found');
                }
                await notification.remove();
                return { message: 'Notification deleted successfully' };
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
};

module.exports = notificationResolvers;