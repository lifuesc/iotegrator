const tableTransaction = require('./tableTransaction');

class Transaction{
    constructor({id, transaction, dateCreate}){
        this.id = id
        this.transaction = transaction
        this.dateCreate = dateCreate
    }

    async create (){
        const result = await tableTransaction.insert({
            transaction: this.transaction,  
    })
    this.id = result.id
    this.dateCreate = result.dateCreate
    }
    
    async search (){
        const searching = await tableTransaction.locateId(this.id)
        this.transaction = searching.transaction;
        this.dateCreate = searching.dateCreate;
    }

}


module.exports = Transaction