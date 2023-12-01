const SavingsGoal = require('../models/SavingsGoal');

const savingsGoalController = {
    async createSavingsGoal(req, res) {
        try {
            const { title, amount, targetDate } = req.body;

            const newSavingsGoal = new SavingsGoal({
                user: req.user.id, 
                title,
                amount,
                targetDate
            });

            const savedSavingsGoal = await newSavingsGoal.save();
            res.status(201).json(savedSavingsGoal);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    // Get all transactions
    async getSavingsGoals(req, res) {
        try {
            const savingsGoals = await SavingsGoal.find({ user: req.user.id });
            res.json(savingsGoals);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    // Fetch a single transaction
    async getSavingsGoal(req, res) {
        try {
            const savingsGoal = await SavingsGoal.findById(req.params.id);
            res.json(savingsGoal);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    async updateSavingsGoal(req, res) {
        try {
            const updatedSavingsGoal = await SavingsGoal.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );
            if (!updatedSavingsGoal) {
                return res.status(404).json({ message: 'Savings goal not found' });
            }
            res.json(updatedSavingsGoal);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    },
    async deleteSavingsGoal(req, res) {
        try {
            const savingsGoal = await SavingsGoal.findById(req.params.id);
            if (!savingsGoal) {
                return res.status(404).json({ message: 'Savings goal not found' });
            }
            await savingsGoal.remove();
            res.json({ message: 'Savings goal deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};


module.exports = savingsGoalController;