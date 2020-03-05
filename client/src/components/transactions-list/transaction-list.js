import React, { useContext } from 'react';
import { TransactionsContext } from "../../contexts/transactions/context";
import { TransactionItem } from "../transaction-item/transaction-item";

export const TransactionList = props => {

    const { transactions } = useContext(TransactionsContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                { transactions.map(transaction => (
                    <TransactionItem key={ transaction._id } transaction={ transaction } />
                )) }
            </ul>
        </>
    );

};

