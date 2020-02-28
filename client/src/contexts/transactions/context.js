import React, { createContext, useReducer } from 'react';
import { Reducer } from "./reducer";
import { ADD_TRANSACTION, DELETE_TRANSACTION } from "../types";

const TransactionsState = {
    transactions: [
        // { id: 1, text: 'Flower', amount: -20 },
        // { id: 2, text: 'Salary', amount: 300 },
        // { id: 3, text: 'Book', amount: -10 },
        // { id: 4, text: 'Camera', amount: 150 }
    ]
};

export const TransactionsContext = createContext(TransactionsState);

export const TransactionState = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, TransactionsState);

    const amounts = state.transactions.map(transaction => transaction.amount);

    const deleteTransaction = id => dispatch({ type: DELETE_TRANSACTION, payload: id });

    const addTransaction = transaction => dispatch({ type: ADD_TRANSACTION, payload: transaction });

    return (
        <TransactionsContext.Provider value={{
            transactions: state.transactions,
            amounts,
            deleteTransaction,
            addTransaction
        }}>
            { children }
        </TransactionsContext.Provider>
    )

};
