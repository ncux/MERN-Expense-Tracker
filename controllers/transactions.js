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

// POST route to add a transaction
// route: /api/v1/transactions
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;
        const transaction = await Transaction.create(req.body);
        return res.status(201).json({ transaction });
    } catch (e) {
        console.log(e);
    }
    next();
};

// route to DELETE a transaction
// route: /api/v1/transactions/:id
exports.deleteTransaction = async (req, res, next) => {

    res.send('DELETE transaction');
    next();
};