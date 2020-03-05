import { ADD_TRANSACTION, GET_TRANSACTIONS, GET_TRANSACTIONS_ERROR, DELETE_TRANSACTION } from "../types";

export const Reducer = (state, action) => {

    switch (action.type) {

        case GET_TRANSACTIONS:
            return { ...state, transactions: action.payload, loading: false };

        case GET_TRANSACTIONS_ERROR:
            return { ...state, error: action.payload, loading: false };

        case ADD_TRANSACTION:
            return { ...state, transactions: [action.payload, ...state.transactions] };

        case DELETE_TRANSACTION:
            const transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
            return { ...state, transactions };

        default:
            return state;
    }
};

