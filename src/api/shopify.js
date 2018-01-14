const Shopify = require('shopify-api-node');

const token = process.env.SHOPIFY_TOKEN;

const shop = new Shopify({
    shopName: 'mihaidev',
    accessToken: token
});

module.exports = shop;
