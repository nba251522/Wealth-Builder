const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type Query {
        "Get the current user's profile"
        # User queries
        getUserProfile: User

        "Get all transactions"
        # Transaction queries
        getTransactions: [Transaction]
        "Get a transaction by ID"
        getTransaction(id: ID!): Transaction

        # Budget queries
        "Get all budgets"
        getBudgets: [Budget]
        "Get a budget by ID"
        getBudget(id: ID!): Budget

        # Notification queries
        "Get all notifications"
        getNotifications: [Notification]
        "Get a notification by ID"
        getNotification(id: ID!): Notification

        # SavingsGoal queries
        "Get all savings goals"
        getSavingsGoals: [SavingsGoal]
        "Get a savings goal by ID"
        getSavingsGoal(id: ID!): SavingsGoal
    }

    type Mutation {
        # User mutations
        "Register a new user"
        register(username: String!, email: String!, password: String!): AuthPayload
        "Login an existing user"
        login(email: String!, password: String!): AuthPayload
        "Update a user's profile"
        updateProfile(userData: UserProfileInput): User
        "Change a user's password"
        changePassword(currentPassword: String!, newPassword: String!): MessageResponse
        "Change a user's email"
        updateEmail(newEmail: String!): User

        # Transaction mutations
        "Add a new transaction"
        addTransaction(transactionData: TransactionInput): Transaction
        "Update a transaction"
        updateTransaction(id: ID!, updateData: TransactionInput): Transaction
        "Delete a transaction"
        deleteTransaction(id: ID!): MessageResponse

        # Budget mutations
        "Add a new budget"
        createBudget(budgetData: BudgetInput): Budget
        "Update a budget"
        updateBudget(id: ID!, updateData: BudgetInput): Budget
        "Delete a budget"
        deleteBudget(id: ID!): MessageResponse

        # Notification mutations
        "Add a new notification"
        createNotification(notificationData: NotificationInput): Notification
        "Update a notification"
        updateNotification(id: ID!, updateData: NotificationInput): Notification
        "Delete a notification"
        deleteNotification(id: ID!): MessageResponse

        #SavingGoal mutations
        "Add a new savings goal"
        createSavingsGoal(savingsGoalData: SavingsGoalInput): SavingsGoal
        "Update a savings goal"
        updateSavingsGoal(id: ID!, updateData: SavingsGoalInput): SavingsGoal
        "Delete a savings goal"
        deleteSavingsGoal(id: ID!): MessageResponse
    }
"User model"
    type User {
        id: ID!
        username: String!
        email: String!
    }
"Transaction model"
    type Transaction {
        id: ID!
        amount: Float!
        type: String!
        category: String!
        description: String
        date: String!
    }
"Budget model"
    type Budget {
        id: ID!
        amount: Float!
        category: String!
    }
"Notification model"
    type Notification {
        id: ID!
        message: String!
        date: String!
    }
"SavingsGoal model"
    type SavingsGoal {
        id: ID!
        title: String!
        amount: Float!
        targetDate: String!
    }
"AuthPayload model"
    type AuthPayload {
        token: String!
    }
"MessageResponse model"
    type MessageResponse {
        message: String!
    }
"UserProfileInput model"
    input UserProfileInput {
        username: String
        email: String
    }
"TransactionInput model"
    input TransactionInput {
        amount: Float!
        type: String!
        category: String!
        description: String
        date: String!
    }
"BudgetInput model"
    input BudgetInput {
        amount: Float!
        category: String!
    }
"NotificationInput model"
    input NotificationInput {
        message: String!
        date: String!
    }
"SavingsGoalInput model"
    input SavingsGoalInput {
        title: String!
        amount: Float!
        targetDate: String!
    }
`;

module.exports = typeDefs;