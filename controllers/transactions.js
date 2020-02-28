
// GET route to fetch all transactions
// route: /api/v1/transactions
exports.getTransactions = (req, res, next) => {

    res.send('GET transactions');
    next();
};

// POST route to add a transaction
// route: /api/v1/transactions
exports.addTransaction = (req, res, next) => {

    res.send('POST transaction');
    next();
};

// route to DELETE a transaction
// route: /api/v1/transactions/:id
exports.deleteTransaction = (req, res, next) => {

    res.send('DELETE transaction');
    next();
};