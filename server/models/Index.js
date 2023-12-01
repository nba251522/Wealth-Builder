const mongoose = require('mongoose');
const User = require('./User');
const Transaction = require('./Transaction');
const Budget = require('./Budget');
const SavingsGoal = require('./SavingsGoal');
const Notification = require('./Notification');

module.exports = {
    User,
    Transaction,
    Budget,
    SavingsGoal,
    Notification,
};