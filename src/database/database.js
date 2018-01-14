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

function setShopToken(name, token, callback)
{
    var payload = {token: token, name: name};
    connect.ref(`tokens/${name}`).set(payload, (error)=> {
        callback(error);
    });
}

function getShopToken(name, callback)
{
    connect.ref(`tokens/${name}`).once('value', function(snapshot) {
        callback(snapshot.val())
    });
}

module.exports = {
    getShopConfig,
    setShopConfig,
    deleteShopConfig,
    getTimerConfig,
    setShopToken,
    getShopToken
}
