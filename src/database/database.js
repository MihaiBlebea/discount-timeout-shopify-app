const connect = require('./connect.js');

function getShopConfig(name, callback)
{
    connect.ref(`shop/${name}`).once('value', function(snapshot) {
        callback(snapshot.val())
    });
}

function setShopConfig(name, payload, callback)
{
    connect.ref(`shop/${name}`).set(payload, (error)=> {
        callback(error);
    });
}

function deleteShopConfig(name, callback)
{
    connect.ref(`shop/${name}`).set(null, (error)=> {
        callback(error);
    })
}

module.exports = {
    getShopConfig,
    setShopConfig,
    deleteShopConfig
}
