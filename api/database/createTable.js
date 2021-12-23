const ModelTable = require('../route/transaction/modelTableTransaction');

ModelTable
    .sync()
    .then(() => console.log('Table is created!'))
    .catch(console.log);