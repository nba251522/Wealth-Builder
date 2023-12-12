const mongoose = require('mongoose');

const budgetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  limit: {
    type: Number,
    required: true
  },
  period: {
    type: String,
    enum: ['Daily', 'Weekly', 'Monthly', 'Yearly'],
    default: 'Monthly'
  },
  category: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: Date,
  recurring: {
    type: Boolean,
    default: false
  },
  // budget limit notification threshold in percentage
  notificationThreshold: {
    type: Number,
    min: 0,
    max: 100 
  },
  status: {
    type: String,
    enum: ['Active', 'Paused', 'Completed'],
    default: 'Active'
  },
  updatedAt: Date
});

module.exports = mongoose.model('Budget', budgetSchema);