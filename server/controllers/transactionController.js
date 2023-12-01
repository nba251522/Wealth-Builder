const Transaction = require('../models/Transaction');

const transactionController = {
    // Add a new transaction
    async addTransaction(req, res) {
        try {
            const { amount, type, category, description, date } = req.body;

            const newTransaction = new Transaction({
                user: req.user.id, 
                amount,
                type,
                category,
                description,
                date
            });

            const savedTransaction = await newTransaction.save();
            res.status(201).json(savedTransaction);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

};
module.exports = transactionController;