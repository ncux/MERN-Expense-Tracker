import { ADD_TRANSACTION, GET_TRANSACTIONS, TRANSACTIONS_ERROR, DELETE_TRANSACTION } from "../types";

export const Reducer = (state, action) => {

    switch (action.type) {

        case GET_TRANSACTIONS:
            return { ...state, transactions: action.payload, loading: false };

        case TRANSACTIONS_ERROR:
            return { ...state, error: action.payload, loading: false };

        case ADD_TRANSACTION:
            return { ...state, transactions: [action.payload, ...state.transactions], loading: false };

        case DELETE_TRANSACTION:
            const transactions = state.transactions.filter(transaction => transaction._id !== action.payload);
            return { ...state, transactions };

        default:
            return state;
    }
};

