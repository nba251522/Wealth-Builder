const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['Budget', 'SavingsGoal', 'Transaction', 'General'],
    required: true
  },
  status: {
    type: String,
    enum: ['Unread', 'Read'],
    default: 'Unread'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
});

module.exports = mongoose.model('Notification', notificationSchema);