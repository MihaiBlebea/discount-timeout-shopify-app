const shopifyAPI = require('shopify-node-api');

const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const root = process.env.ROOT;

const callback = root + '/callback';

const configShop = {
    shop: 'mihaidev', // MYSHOP.myshopify.com
    shopify_api_key: apiKey, // Your API key
    shopify_shared_secret: apiSecret, // Your Shared Secret
    shopify_scope: ['read_products', 'read_script_tags', 'write_script_tags', 'read_themes', 'write_themes'],
    redirect_uri: callback,
    nonce: 'serban' // nonce; you must provide a randomly selected value unique for each authorization request
}

// Create the Shopify API object
var authApi = new shopifyAPI(configShop);

module.exports = authApi
