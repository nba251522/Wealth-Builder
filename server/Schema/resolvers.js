const userResolver = require('./userResolver');
const budgetResolver = require('./budgetResolver');
const notificationResolver = require('./notificationResolver');
const transactionResolver = require('./transactionResolver');
const savingsResolver = require('./savingsResolver');

const resolvers = {
    Query: {
        ...userResolver.Query,
        ...budgetResolver.Query,
        ...notificationResolver.Query,
        ...transactionResolver.Query,
        ...savingsResolver.Query
    },
    Mutation: {
        ...userResolver.Mutation,
        ...budgetResolver.Mutation,
        ...notificationResolver.Mutation,
        ...transactionResolver.Mutation,
        ...savingsResolver.Mutation
    }
};

module.exports = resolvers;