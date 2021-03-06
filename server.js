const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const path = require('path');

dotenv.config({ path: './config/config.env' });

const port = process.env.PORT || 5000;

const database = require('./config/database');
database();

// routes
const transactions = require('./routes/transactions');

const app  = express();

// body-parse requests of content-type - application/x-www-form-urlencoded
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

if(process.env.NODE_ENV == 'development') {
    app.use(morgan('dev'));
}

app.use('/api/v1/transactions', transactions);

if(process.env.NODE_ENV == 'production') {
    app.use(express.static('client/build'));

    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html')));
}

app.listen(port, () => console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port}`.green.bold)); // using the "colors" module