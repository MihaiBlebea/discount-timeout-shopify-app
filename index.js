const dotenv = require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')(); // This is already called as a function
const querystring = require('querystring');
const request = require('request-promise');
const path = require('path');
const shopifyAPI = require('shopify-node-api');
const Shopify = require('shopify-api-node');

const app = express();

const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const httpTunnel = process.env.HTTP_TUNNEL;
const token = process.env.SHOPIFY_TOKEN;

const callback = httpTunnel + '/callback';

const configShop = {
    shop: 'mihaidev', // MYSHOP.myshopify.com
    shopify_api_key: apiKey, // Your API key
    shopify_shared_secret: apiSecret, // Your Shared Secret
    shopify_scope: 'read_products',
    redirect_uri: callback,
    nonce: 'ceva007' // nonce; you must provide a randomly selected value unique for each authorization request
}

var shopAPI = new shopifyAPI(configShop);

app.use(express.static(__dirname + '/admin/build'));

app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'admin', 'build', 'index.html'));
});

// ** Install routes ** //
app.get('/shopify', (request, response)=> {
    var auth_url = shopAPI.buildAuthURL();
    response.redirect(auth_url);
})

app.get('/callback', (request, response)=> {
    query_params = request.query;

    shopAPI.exchange_temporary_token(query_params, (err, data)=> {
        console.log(err);
        console.log(data['access_token']);
        response.send(data['access_token'])
    });
})

app.get('/products', (request, response)=> {
    const shop = new Shopify({
        shopName: 'mihaidev',
        accessToken: token
    });

    shop.product.list({ limit: 5 }).then((result)=> {console.log(result)}).catch((err)=> {console.error(err)});
})



app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
