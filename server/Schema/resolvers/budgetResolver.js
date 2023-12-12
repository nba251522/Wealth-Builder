const Budget = require('../../models/Budget');

const budgetResolvers = {
    Query: {
        // Fetch all budgets for a user
        getBudgets: async (_, args, context) => {
            try {
                const budgets = await Budget.find({ user: context.user.id });
                return budgets;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Fetch a single budget
        getBudget: async (_, { id }, context) => {
            try {
                const budget = await Budget.findById(id);
                if (!budget) {
                    throw new Error('Budget not found');
                }
                return budget;
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
    Mutation: {
        // Create a new budget
        createBudget: async (_, { budgetData }, context) => {
            try {
                const newBudget = new Budget({
                    ...budgetData,
                    user: context.user.id
                });
                return await newBudget.save();
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Update a budget
        updateBudget: async (_, { id, updateData }, context) => {
            try {
                const updatedBudget = await Budget.findByIdAndUpdate(
                    id,
                    updateData,
                    { new: true }
                );
                if (!updatedBudget) {
                    throw new Error('Budget not found');
                }
                return updatedBudget;
            } catch (error) {
                throw new Error(error.message);
            }
        },
        // Delete a budget
        deleteBudget: async (_, { id }, context) => {
            try {
                const budget = await Budget.findById(id);
                if (!budget) {
                    throw new Error('Budget not found');
                }
                await budget.remove();
                return { message: 'Budget deleted successfully' };
            } catch (error) {
                throw new Error(error.message);
            }
        },
    },
};

module.exports = budgetResolvers;