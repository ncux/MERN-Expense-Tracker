import React, { useContext } from 'react';
import { TransactionsContext } from "../../contexts/transactions/context";
import { Transaction } from "../transaction/transaction";

export const TransactionList = props => {

    const { transactions } = useContext(TransactionsContext);

    return (
        <>
            <h3>History</h3>
            <ul className="list">
                { transactions.map(transaction => (
                    <Transaction key={ transaction.id } transaction={ transaction } />
                )) }
            </ul>
        </>
    );

};

