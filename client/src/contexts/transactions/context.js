import React, { createContext, useReducer } from 'react';
import { Reducer } from "./reducer";
import { ADD_TRANSACTION, GET_TRANSACTIONS, DELETE_TRANSACTION, GET_TRANSACTIONS_ERROR } from "../types";

import axios from 'axios';

const transactions_API = `/api/v1/transactions`;

const TransactionsState = {
    error: null,
    loading: true,
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

    const getTransactions = async () => {
        try {
            const res = await axios.get(transactions_API);
            dispatch({ type: GET_TRANSACTIONS, payload: res.data.data });
        } catch (e) {
            dispatch({ type: GET_TRANSACTIONS_ERROR, payload: e.response.data.error });
        }

    };

    const deleteTransaction = id => dispatch({ type: DELETE_TRANSACTION, payload: id });

    const addTransaction = transaction => dispatch({ type: ADD_TRANSACTION, payload: transaction });

    return (
        <TransactionsContext.Provider value={{
            transactions: state.transactions,
            loading: state.loading,
            error: state.error,
            amounts,
            getTransactions,
            deleteTransaction,
            addTransaction
        }}>
            { children }
        </TransactionsContext.Provider>
    )

};
