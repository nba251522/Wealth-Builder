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

};

module.exports = savingsGoalController;