const express = require('express');
const app = express();
const config = require('config')
const router = require('./route/transaction')

app.use(express.json());

app.use('/api/transactions', router);

app.listen(config.get('api.port'), () => 
console.log('Middleware online!'));
// teste