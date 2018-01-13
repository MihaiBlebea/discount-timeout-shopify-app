const connect = require('./connect.js');

function store(document, database)
{
    var call = connect.ref(database).push(document).key;
    return call;
}

module.exports = {
    store
}
