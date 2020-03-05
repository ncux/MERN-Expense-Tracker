import React, { createContext, useReducer, useEffect } from 'react';
import { Reducer } from "./reducer";
import { ADD_TRANSACTION, GET_TRANSACTIONS, DELETE_TRANSACTION, TRANSACTIONS_ERROR } from "../types";

import axios from 'axios';

const transactions_API = `/api/v1/transactions`;

const TransactionsState = {
    error: null,
    loading: true,
    transactions: []
};

export const TransactionsContext = createContext(TransactionsState);

export const TransactionState = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, TransactionsState);

    const amounts = state.transactions.map(transaction => transaction.amount);

    useEffect(() => {
        getTransactions();
        // eslint-disable-next-line
    }, []);

    const getTransactions = async () => {
        try {
            const res = await axios.get(transactions_API);
            dispatch({ type: GET_TRANSACTIONS, payload: res.data.data });
        } catch (e) {
            dispatch({ type: TRANSACTIONS_ERROR, payload: e.response.data.error });
        }
    };

    const deleteTransaction = async id => {
        try {
            await axios.delete(`${transactions_API}/${id}`);
            dispatch({ type: DELETE_TRANSACTION, payload: id });
        } catch (e) {
            dispatch({ type: TRANSACTIONS_ERROR, payload: e.response.data.error });
        }
    };

    const addTransaction = async transaction => {
        try {
            const config = { headers: { 'Content-Type': 'application/json' } };
            const res = await axios.post(transactions_API, transaction, config);
            dispatch({ type: ADD_TRANSACTION, payload: res.data.data });  // payload could be transaction instead of res.data.data because the latter is slow to arrive
        } catch (e) {
            dispatch({ type: TRANSACTIONS_ERROR, payload: e.response.data.error });
        }
    };

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
