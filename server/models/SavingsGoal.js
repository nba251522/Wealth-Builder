const mongoose = require('mongoose');

const savingsGoalSchema = new mongoose.Schema({
  // user: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'User',
  //   required: true
  // },
  goalName: {
    type: String,
    required: true,
    trim: true
  },
  goalAmount: {
    type: Number,
    required: true
  },
  currentAmount: {
    type: Number,
    default: 0
  },
  targetDate: {
    type: Date
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: Date,
});

module.exports = mongoose.model('SavingsGoal', savingsGoalSchema);