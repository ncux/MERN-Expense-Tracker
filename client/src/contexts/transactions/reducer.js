import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../types";

export const Reducer = (state, action) => {

    switch (action.type) {

        case ADD_TRANSACTION:
            return { ...state, transactions: [action.payload, ...state.transactions] };

        case DELETE_TRANSACTION:
            const transactions = state.transactions.filter(transaction => transaction.id !== action.payload);
            return { ...state, transactions };

        default:
            return state;
    }
};

