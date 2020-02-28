import React, {useContext, useState} from 'react';
import { TransactionsContext } from "../../contexts/transactions/context";
import uuid from 'react-uuid';

export const AddTransaction = props => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const { addTransaction } = useContext(TransactionsContext);

    const onSubmit = e => {
        e.preventDefault();
        if(text == '' || amount == 0) return;

        const transaction = { id: uuid(), text, amount: +amount };
        addTransaction(transaction);
        setText('');
        setAmount(0);
    };

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={ onSubmit }>
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" value={ text } onChange={ event => setText(event.target.value) } placeholder="Enter text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br/>
                        (negative - expense, positive - income)
                    </label>
                    <input type="number" value={ amount } onChange={ event => setAmount(event.target.value) } placeholder="Enter amount..."/>
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    );

};

