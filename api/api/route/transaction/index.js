const router = require('express').Router();
const { Json } = require('sequelize/dist/lib/utils');
const tableTransaction = require('./tableTransaction');
const Transaction = require('./Transaction')

router.get('/', async (request, response) =>{
    const result = await tableTransaction.list();
    response.send(
        JSON.stringify(result)
    );
})

router.post('/', async (request, response) =>{
    const receivedData = request.body;
    const transaction = new Transaction(receivedData);
    await transaction.create();
    response.send(
        JSON.stringify(transaction)
    );
})

router.get('/:idTransaction', async (request, response) =>{
    try {
        const id = request.params.idTransaction;
        const transaction = new Transaction({id:id});
        await transaction.search();
        response.send(
            JSON.stringify(transaction)
        )        
    } catch (erro) {
        response.send()
        JSON.stringify({
            mensagem: erro.message
        })
    }
})

module.exports = router;