const Transaction = require('../../models/Transaction');

const transactionResolvers = {
    Query: {
        // Get all transactions for a user
        getTransactions: async (_, args, context) => {
            try {
                const transactions = await Transaction.find({ user: context.user.id });
                return transactions;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Fetch a single transaction
        getTransaction: async (_, { id }, context) => {
            try {
                const transaction = await Transaction.findById(id);
                if (!transaction) {
                    throw new Error('Transaction not found');
                }
                return transaction;
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
    Mutation: {
        // Add a new transaction
        addTransaction: async (_, { amount, type, category, description, date }, context) => {
            try {
                const newTransaction = new Transaction({
                    user: context.user.id,
                    amount,
                    type,
                    category,
                    description,
                    date
                });
                return await newTransaction.save();
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Update a transaction
        updateTransaction: async (_, { id, updateData }, context) => {
            try {
                const updatedTransaction = await Transaction.findByIdAndUpdate(
                    id,
                    updateData,
                    { new: true }
                );
                if (!updatedTransaction) {
                    throw new Error('Transaction not found');
                }
                return updatedTransaction;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Delete a transaction
        deleteTransaction: async (_, { id }, context) => {
            try {
                const transaction = await Transaction.findById(id);
                if (!transaction) {
                    throw new Error('Transaction not found');
                }
                await transaction.remove();
                return { message: 'Transaction deleted successfully' };
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
};

module.exports = transactionResolvers;