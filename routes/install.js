const express = require('express');
const authApi = require('../src/api/auth.js');
const db = require('../src/database/database.js');

const router = new express.Router();

// Init install process
router.get('/shopify', (request, response)=> {
    var auth_url = authApi.buildAuthURL();
    response.redirect(auth_url);
})

// Callback
router.get('/callback', (request, response)=> {
    query_params = request.query;
    authApi.exchange_temporary_token(query_params, (err, data)=> {
        let token = data['token'];
        authApi.get('/admin/shop.json', (err, data, headers)=> {
            response.send(JSON.stringify(data))
            var payload = {
                shop: data.shop.name,
                email: data.shop.email,
                token: token
            }
            response.send(JSON.stringify(token))
            // db.setShopToken(payload, data['token'], (error)=> {
            //     response.send(JSON.stringify(error))
            // })
        })
        // db.setShopToken(shopName, data['token'], (error)=> {
        //     response.send(JSON.stringify(error))
        // })
        // response.send(JSON.stringify(data))
    });
})

module.exports = router;
