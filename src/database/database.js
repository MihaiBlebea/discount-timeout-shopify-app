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

function getTimerConfig(name, timer, callback)
{
    connect.ref(`shop/${name}/timers`).once('value', function(snapshot) {
        var timers = snapshot.val();
        callback(timers[timer])
    });
}

module.exports = {
    getShopConfig,
    setShopConfig,
    deleteShopConfig,
    getTimerConfig
}
