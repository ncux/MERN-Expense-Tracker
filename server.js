const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const path = require('path');

// routes
const transactions = require('./routes/transactions');

dotenv.config({ path: './config/config.env' });
const port = process.env.PORT || 5000;

const app  = express();

app.get('/', (req, res) => res.send('Hi!'));
app.use('/api/v1/transactions', transactions);

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.green.bold)); // using the "colors" module