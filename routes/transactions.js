const express = require('express');
const router = express.Router();

// controller
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transactions');

// router.get('/', (req, res) => res.send('transactions route'));

router.route('/').get(getTransactions);

module.exports = router;