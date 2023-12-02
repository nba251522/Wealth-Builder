const userResolver = require('./resolvers/userResolver');
const budgetResolver = require('./resolvers/budgetResolver');
const notificationResolver = require('./resolvers/notificationResolver');
const transactionResolver = require('./resolvers/transactionResolver');
const savingsGoalResolver = require('./resolvers/savingsGoalResolver');

const resolvers = {
    Query: {
        ...userResolver.Query,
        ...budgetResolver.Query,
        ...notificationResolver.Query,
        ...transactionResolver.Query,
        ...savingsGoalResolver.Query
    },
    Mutation: {
        ...userResolver.Mutation,
        ...budgetResolver.Mutation,
        ...notificationResolver.Mutation,
        ...transactionResolver.Mutation,
        ...savingsGoalResolver.Mutation
    }
};

module.exports = resolvers;