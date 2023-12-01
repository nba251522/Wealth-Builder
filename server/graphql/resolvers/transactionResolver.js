const Transaction = require('../../models/Transaction');

const transactionController = {
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
    // Get all transactions
    async getTransactions(req, res) {
        try {
            const transactions = await Transaction.find({ user: req.user.id });
            res.json(transactions);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // Fetch a single transaction
    async getTransaction(req, res) {
        try {
            const transaction = await Transaction.findById(req.params.id);
            res.json(transaction);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },

    async updateTransaction(req, res) {
        try {
            const updatedTransaction = await Transaction.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedTransaction) {
                return res.status(404).json({ message: 'Transaction not found' });
            }
            res.json(updatedTransaction);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },

    async deleteTransaction(req, res) {
        try {
            const transaction = await Transaction.findById(req.params.id);
            if (!transaction) {
                return res.status(404).json({ message: 'Transaction not found' });
            }
            await transaction.remove();
            res.json({ message: 'Transaction deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};
module.exports = transactionController;