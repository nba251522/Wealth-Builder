import {
    CREATE_USER,
    LOGIN_USER,
    ADD_TRANSACTION,
    ADD_SAVINGSGOAL,
    ADD_NOTIFICATION
} from './actions';
import { QUERY_USER, QUERY_EXPENSES, QUERY_ME } from './queries';

export default function reducer(state, action) {
    switch (action.type) {
        case CREATE_USER:
            return {
                ...state,
                user: action.payload
            };
        case LOGIN_USER:
            return {
                ...state,
                user: null
            };
        case ADD_TRANSACTION:
            return {
                ...state,
                transactions: [...state.transactions, action.payload]
            };
        case ADD_SAVINGSGOAL:
            return {
                ...state,
                savingsGoals: [...state.savingsGoals, action.payload]
            };
        case ADD_NOTIFICATION:
            return {
                ...state,
                notifications: [...state.notifications, action.payload]
            };
        default:
            return state;
    }
}