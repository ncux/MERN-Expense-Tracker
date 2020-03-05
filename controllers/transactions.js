const Transaction = require('../models/Transaction');

// GET route to fetch all transactions
// route: /api/v1/transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();
        return res.status(200).json({
            count: transactions.length,
            data: transactions
        });
    } catch (e) {
        res.status(500).json({
            error: `Server error; ${ e.message }`
        });
    }
    next();
};

// POST route to add a transaction-item
// route: /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({ transaction });
    } catch (e) {
        if(e.name == 'ValidationError') {
            const messages = Object.values(e.errors).map(value => value.message);
            return res.status(400).json({ error: messages });
        } else {
            return res.status(500).json({ error: 'Server error' });
        }
    }
    
};

// route to DELETE a transaction-item
// route: /api/v1/transactions/:id
exports.deleteTransaction = async (req, res, next) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if(!transaction) {
            return res.status(404).json({ error: 'The transaction-item was not found!' });
        }
        await transaction.remove();
        return res.status(200).json({ message: 'The transaction-item was successfully deleted!' });
    } catch (e) {
        res.status(500).json({
            error: `Server error; ${ e.message }`
        });
    }
};