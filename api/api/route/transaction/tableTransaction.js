const Model = require('./modelTableTransaction');

module.exports = {
    list (){
        return Model.findAll()
    },
    insert (transaction){
        return Model.create(transaction);
    },
    async locateId (id){
        const searching = await Model.findOne({
            where:{
                id:id
            }
        });
        if(!searching){
            throw new Error('Transaction not found!')
        }
        return searching;
    }
}