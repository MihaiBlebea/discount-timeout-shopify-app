const express = require('express');
const db = require('../src/database/database.js');

const router = new express.Router();

router.get('/get/data/:shop', (request, response)=> {
    var shopName = request.params.shop;
    db.getShopConfig(shopName, (data)=> {
        response.send(JSON.stringify(data))
    })
})

router.post('/set/data/:shop', (request, response)=> {
    var shopName = request.params.shop;
    var payload = request.body;
    db.setShopConfig(shopName, payload, (error)=> {
        response.send(JSON.stringify(error))
    })
})

router.get('/delete/data/:shop', (request, response)=> {
    var shopName = request.params.shop;
    db.deleteShopConfig(shopName, (error)=> {
        response.send(JSON.stringify(error))
    })
})

router.get('/get/timer/:shop', (request, response)=> {
    var shopName = request.params.shop;
    var timer = request.query.timer;
    db.getTimerConfig(shopName, timer, (data)=> {
        response.send(JSON.stringify(data))
    })
})


module.exports = router;
