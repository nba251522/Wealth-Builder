import { gql } from '@apollo/client';

export const CREATE_USER = gql`
    mutation createUser($username: String!, $email: String!, $password: String!) {
        createUser(username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
                email
                }
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password){
            token
            user {
                _id
                username
                email
            }
        }
    }
`;

export const ADD_TRANSACTION = gql`
    mutation addTransaction($amount: Float!, $description: String!, $date: String!) {
        addTransaction(amount: $amount, description: $description, date: $date) {
            _id
            amount
            description
            date
        }
    }
`;

export const ADD_SAVINGSGOAL = gql`
    mutation addSavingsGoal($amount: Float!, $description: String!, $date: String!) {
        addSavingsGoal(amount: $amount, description: $description, date: $date) {
            _id
            goalName
            goalAmount
            targetDate
            createdAt
            username
            savings {
        }
    }
`;

export const ADD_NOTIFICATION = gql`
    mutation addNotification($amount: Float!, $description: String!, $date: String!) {
        addNotification(amount: $amount, description: $description, date: $date) {
            _id
            user
            message
            type
            createdAt
        }
    }
`;