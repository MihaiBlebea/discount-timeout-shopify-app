const express = require('express');
const snippet = require('../src/insert/snippets.js');

const router = new express.Router();

router.get('/insert/snippet', (request, response)=> {
    snippet.insert('snippets/timer.liquid', (result)=> {
        response.send(JSON.stringify(result))
    });
})

router.get('/remove/snippet', (request, response)=> {
    snippet.remove('snippets/timer.liquid', (result)=> {
        response.send(JSON.stringify(result))
    });
})

module.exports = router;
