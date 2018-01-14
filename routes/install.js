const express = require('express');
const authApi = require('../src/api/auth.js');
const store = require('../src/api/shopify.js');

const router = new express.Router();

// Init install process
router.get('/shopify', (request, response)=> {
    var auth_url = authApi.buildAuthURL();
    response.redirect(auth_url);
})

// Callback
router.get('/callback', (request, response)=> {
    query_params = request.query;
    // var shopName = query_params.shop.split('.')[0];
    authApi.exchange_temporary_token(query_params, (err, data)=> {
        authApi.get('/admin/shop.json', (err, data, headers)=> {
            response.send(JSON.stringify(data))
        })
        // db.setShopToken(shopName, data['token'], (error)=> {
        //     response.send(JSON.stringify(error))
        // })
        // response.send(JSON.stringify(data))
    });
})

module.exports = router;
