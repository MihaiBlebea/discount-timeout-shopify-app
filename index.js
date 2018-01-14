const dotenv = require('dotenv').config();
const express = require('express');
const crypto = require('crypto');
const cookie = require('cookie');
const nonce = require('nonce')(); // This is already called as a function
const querystring = require('querystring');
const request = require('request-promise');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 3000;

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

// Require all routes
app.use(require('./routes/install.js'));
app.use(require('./routes/admin.js'));
app.use(require('./routes/script-tags.js'));
app.use(require('./routes/configs.js'));
app.use(require('./routes/snippets.js'));


// Instruct app to listen to port
app.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
