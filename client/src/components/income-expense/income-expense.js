import React, { useContext } from 'react';
import { TransactionsContext } from "../../contexts/transactions/context";
import { numberWithCommas } from "../../utilities/number-formater";

export const IncomeExpense = props => {

    const { amounts } = useContext(TransactionsContext);

    const income = amounts.filter(item => item > 0).reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = (amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *-1).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">${ numberWithCommas(income) }</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">${ numberWithCommas((expense)) }</p>
            </div>
        </div>
    );

};

