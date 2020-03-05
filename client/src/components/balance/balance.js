import React, { useContext } from 'react';
import { TransactionsContext } from "../../contexts/transactions/context";
import { numberWithCommas } from "../../utilities/number-formater";

export const Balance = props => {

    const { amounts } = useContext(TransactionsContext);

    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <>
            <h4>Your balance</h4>
            <h1>${ numberWithCommas(total) }</h1>
        </>
    );

};

