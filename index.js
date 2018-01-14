const dotenv = require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')(); // This is already called as a function
const querystring = require('querystring');
const request = require('request-promise');
const path = require('path');
const bodyParser = require('body-parser');
const shopifyAPI = require('shopify-node-api');
const Shopify = require('shopify-api-node');
const scriptTag = require('./src/script-tags.js');
const con = require('./src/database/connect.js');
const db = require('./src/database/database.js');

const app = express();

// Get configs from .env file
const apiKey = process.env.SHOPIFY_API_KEY;
const apiSecret = process.env.SHOPIFY_API_SECRET;
const httpTunnel = process.env.HTTP_TUNNEL;
const token = process.env.SHOPIFY_TOKEN;
const port = process.env.PORT || 3000;

// Create the callback url for authentication
const callback = httpTunnel + '/callback';

// Create the config object
const configShop = {
    shop: 'mihaidev', // MYSHOP.myshopify.com
    shopify_api_key: apiKey, // Your API key
    shopify_shared_secret: apiSecret, // Your Shared Secret
    shopify_scope: ['read_products', 'read_script_tags', 'write_script_tags'],
    redirect_uri: callback,
    nonce: 'ceva007' // nonce; you must provide a randomly selected value unique for each authorization request
}

// Create the Shopify API object
var shopAPI = new shopifyAPI(configShop);

// Middleware setup
app.use(express.static(__dirname + '/admin/build'));
app.use(express.static(__dirname + '/assets'));
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use((request, response, next)=> {
    var now = new Date().toString();
    console.log(`${now}: ${request.method} ${request.url}`);
    next();
})

// App router setup
app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, 'admin', 'build', 'index.html'));
});

// ** Install app route ** //
app.get('/shopify', (request, response)=> {
    var auth_url = shopAPI.buildAuthURL();
    response.redirect(auth_url);
})

// ** THe callback that receives the token after auth ** //
app.get('/callback', (request, response)=> {
    query_params = request.query;

    shopAPI.exchange_temporary_token(query_params, (err, data)=> {
        console.log(err);
        console.log(data['access_token']);
        response.send(data['access_token'])
    });
})

// ** Setup shop object with token and shop name ** //
const shop = new Shopify({
    shopName: 'mihaidev',
    accessToken: token
});

// ** Get products from store ** //
app.get('/products', (request, response)=> {
    shop.product.list({ limit: 5 }).then((result)=> {
        console.log(result);
        response.json(JSON.stringify(result));
    }).catch((err)=> {
        console.error(err);
        response.json(JSON.stringify(err));
    });
})

// ** Get products from store ** //
app.get('/get/config/:shop', (request, response)=> {
    var shopName = request.params.shop;
    db.getShopConfig(shopName, (data)=> {
        response.send(JSON.stringify(data))
    })
})

// ** Get all script tags from the shop ** //
app.get('/get/script', (request, response)=> {
    shop.scriptTag.list({ limit: 10 }).then((result)=> {
        response.send(JSON.stringify(result));
    }).catch((err)=> {
        response.send(JSON.stringify(err));
    });
})

// ** Add a new script tag to the shop ** //
app.get('/set/script/', (request, response)=> {
    var src = request.query.src;
    if(src !== null)
    {
        scriptTag.set(src, (result)=> {
            response.send(result);
        })
    }
})

// ** Update tag to the shop ** //
app.get('/update/script/', (request, response)=> {
    var src = request.query.src;
    if(src !== null)
    {
        scriptTag.update(src, (result)=> {
            response.send(result);
        })
    }
})

// ** Remove a script tag from the shop ** //
app.get('/remove/script/:id', (request, response)=> {
    var id = request.params.id;
    shop.scriptTag.delete(id).then((result)=> {
        response.send(JSON.stringify(result));
    }).catch((err)=> {
        response.send(JSON.stringify(err));
    });
})

// ** Get data from the database ** //
app.get('/get/data/:shop', (request, response)=> {
    var shopName = request.params.shop;
    db.getShopConfig(shopName, (data)=> {
        response.send(JSON.stringify(data))
    })
})

// ** Set data to the database ** //
app.post('/set/data/:shop', (request, response)=> {
    var shopName = request.params.shop;
    var payload = request.body;
    db.setShopConfig(shopName, payload, (error)=> {
        response.send(JSON.stringify(error))
    })
})

// ** Delete data from database ** //
app.get('/delete/data/:shop', (request, response)=> {
    var shopName = request.params.shop;
    db.deleteShopConfig(shopName, (error)=> {
        response.send(JSON.stringify(error))
    })
})

app.get('/get/timer/:shop', (request, response)=> {
    var shopName = request.params.shop;
    var timer = request.query.timer;
    db.getTimerConfig(shopName, timer, (data)=> {
        response.send(JSON.stringify(data))
    })
})


// Instruct app to listen to port
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
