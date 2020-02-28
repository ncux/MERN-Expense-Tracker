import React from 'react';
import './App.css';

import { Header } from "./components/header/header";
import { Balance } from "./components/balance/balance";
import { IncomeExpense } from "./components/income-expense/income-expense";
import { TransactionList } from "./components/transactions-list/transaction-list";
import { AddTransaction } from "./components/add-transaction/add-transaction";

import { TransactionState } from "./contexts/transactions/context";

function App() {
  return (
    <TransactionState>
        <div className="">
            <Header />
            <div className="container">
                <Balance />
                <IncomeExpense />
                <TransactionList />
                <AddTransaction />
            </div>
        </div>
    </TransactionState>
  );
}

export default App;
