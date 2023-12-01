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
    async getTransactions(req, res) {
        try {
            const transactions = await Transaction.find({ user: req.user.id });
            res.json(transactions);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    
    async getTransaction(req, res) {
        try {
            const transaction = await Transaction.findById(req.params.id);
            res.json(transaction);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};
module.exports = transactionController;