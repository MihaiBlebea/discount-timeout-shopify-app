const dotenv = require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')();
const querystring = require('querystring');
const request = require('request-promise');
const shopifyAPI = require('shopify-node-api');
const Shopify = require('shopify-api-node');

const app = express();

const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;

const forwardingAddress = 'https://e181ba28.ngrok.io/callback';

const configShop = {
    shop: 'mihaidev', // MYSHOP.myshopify.com
    shopify_api_key: apiKey, // Your API key
    shopify_shared_secret: apiSecret, // Your Shared Secret
    shopify_scope: 'read_products',
    redirect_uri: 'https://e181ba28.ngrok.io/callback',
    nonce: 'ceva007' // nonce(); you must provide a randomly selected value unique for each authorization request
}

var shopAPI = new shopifyAPI(configShop);


app.get('/', (request, response) => {
    response.send('Hello World!');
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
        accessToken: '7e17a14d3f958739447420e0e66ccfd8'
    });

    shop.product.list({ limit: 5 }).then((result)=> {console.log(result)}).catch((err)=> {console.error(err)});
})



app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
