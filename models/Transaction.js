const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add a transaction-item text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a transaction-item amount']
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('expense-tracker-transactions', TransactionSchema);