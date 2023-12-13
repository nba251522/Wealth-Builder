import { gql } from '@apollo/client';


export const QUERY_USER = gql`
    {
        User {
            _id
            username
            email
            createdAt
            updatedAt
            bio
            Transaction {
                _id
                amount
                date
                type
                category
                description
            }
        }
    }
`;

export const QUERY_TRANSACTION = gql`
    {
        Transaction {
            _id
            user
            amount
            date
            type
            category
            description
        }
    }
`;


export const QUERY_BUDGET = gql`
    {
        Budget {
            _id
            user
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

export const QUERY_SAVINGS_GOAL = gql`
    {
        SavingsGoal {
            _id
            user
            goalName
            goalAmount
            currentAmount
            targetDate
            createdAt
            updatedAt
        }
    }
`;