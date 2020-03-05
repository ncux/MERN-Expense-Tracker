import React, { useContext } from 'react';
import { TransactionsContext } from "../../contexts/transactions/context";

export const TransactionItem = ({ transaction }) => {

    const { deleteTransaction } = useContext(TransactionsContext);

    const sign = transaction.amount < 0 ? '-' : '+';

    return (
        <>
            <li className={ transaction.amount < 0 ? 'minus' : 'plus' }>
                { transaction.text }
                <span>{ sign }${ Math.abs(transaction.amount) }</span>
                <button onClick={ () => deleteTransaction(transaction._id) }  className="delete-btn">x</button>
            </li>
        </>
    );

};

