const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        # User queries
        getUserProfile: User

        # Transaction queries
        getTransactions: [Transaction]
        getTransaction(id: ID!): Transaction

        # Budget queries
        getBudgets: [Budget]
        getBudget(id: ID!): Budget

        # Notification queries
        getNotifications: [Notification]
        getNotification(id: ID!): Notification
    }

    type Mutation {
        # User mutations
        register(username: String!, email: String!, password: String!): AuthPayload
        login(email: String!, password: String!): AuthPayload
        updateProfile(userData: UserProfileInput): User
        changePassword(currentPassword: String!, newPassword: String!): MessageResponse
        updateEmail(newEmail: String!): User

        # Transaction mutations
        addTransaction(transactionData: TransactionInput): Transaction
        updateTransaction(id: ID!, updateData: TransactionInput): Transaction
        deleteTransaction(id: ID!): MessageResponse

        # Budget mutations
        createBudget(budgetData: BudgetInput): Budget
        updateBudget(id: ID!, updateData: BudgetInput): Budget
        deleteBudget(id: ID!): MessageResponse

        # Notification mutations
        createNotification(notificationData: NotificationInput): Notification
        updateNotification(id: ID!, updateData: NotificationInput): Notification
        deleteNotification(id: ID!): MessageResponse
    }

    type User {
        id: ID!
        username: String!
        email: String!
    }

    type Transaction {
        id: ID!
        amount: Float!
        type: String!
        category: String!
        description: String
        date: String!
    }

    type Budget {
        id: ID!
        amount: Float!
        category: String!
    }

    type Notification {
        id: ID!
        message: String!
        date: String!
    }

    type AuthPayload {
        token: String!
    }

    type MessageResponse {
        message: String!
    }

    input UserProfileInput {
        username: String
        email: String
    }

    input TransactionInput {
        amount: Float!
        type: String!
        category: String!
        description: String
        date: String!
    }

    input BudgetInput {
        amount: Float!
        category: String!
    }

    input NotificationInput {
        message: String!
        date: String!
    }
`;

module.exports = typeDefs;