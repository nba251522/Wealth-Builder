const SavingsGoal = require('../../models/SavingsGoal');

const savingsGoalResolvers = {
    Query: {
        // Get all savings goals for a user
        getSavingsGoals: async (_, args, context) => {
            try {
                const savingsGoals = await SavingsGoal.find({ user: context.user.id });
                return savingsGoals;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Fetch a single savings goal
        getSavingsGoal: async (_, { id }, context) => {
            try {
                const savingsGoal = await SavingsGoal.findById(id);
                if (!savingsGoal) {
                    throw new Error('Savings goal not found');
                }
                return savingsGoal;
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
    Mutation: {
        // Create a new savings goal
        createSavingsGoal: async (_, { title, amount, targetDate }, context) => {
            try {
                const newSavingsGoal = new SavingsGoal({
                    user: context.user.id,
                    title,
                    amount,
                    targetDate
                });
                return await newSavingsGoal.save();
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Update a savings goal
        updateSavingsGoal: async (_, { id, updateData }, context) => {
            try {
                const updatedSavingsGoal = await SavingsGoal.findByIdAndUpdate(
                    id,
                    updateData,
                    { new: true }
                );
                if (!updatedSavingsGoal) {
                    throw new Error('Savings goal not found');
                }
                return updatedSavingsGoal;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Delete a savings goal
        deleteSavingsGoal: async (_, { id }, context) => {
            try {
                const savingsGoal = await SavingsGoal.findById(id);
                if (!savingsGoal) {
                    throw new Error('Savings goal not found');
                }
                await savingsGoal.remove();
                return { message: 'Savings goal deleted successfully' };
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
};

module.exports = savingsGoalResolvers;