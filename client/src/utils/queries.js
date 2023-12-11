import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            email
            budeget
            expenses {
                _id
                expenseText
                expenseAmount
                createdAt
            }
        }
    }

`;

export const QUERY_USER = gql`
    {
        user {
            _id
            username
            email
            budeget
            expenses {
                _id
                expenseText
                expenseAmount
                createdAt
            }
        }
    }

`;

export const QUERY_EXPENSES = gql`
    {
        expenses {
            _id
            expenseText
            expenseAmount
            createdAt
        }
    }
`;

export const budget = gql`
    {
        budget {
            _id
            limit
            period
            category
            createdAt
            startDate
            endDate
            recurring
            notificationThreshold
            status
            updatedAt
        }
    }
`;

export const savingsGoal = gql`
    {
        savingsGoal {
            _id
            goalName
            savingsGoalAmount
            createdAt
        }
    }
`;