const express = require('express');
const shop = require('../src/api/shopify.js');
const scriptTag = require('../src/insert/script-tags.js');

const router = new express.Router();


router.get('/get/scripts', (request, response)=> {
    shop.scriptTag.list({ limit: 10 }).then((result)=> {
        response.send(JSON.stringify(result));
    }).catch((err)=> {
        response.send(JSON.stringify(err));
    });
})

router.get('/set/script', (request, response)=> {
    var src = request.query.src;
    if(src !== null)
    {
        scriptTag.set(src, (result)=> {
            response.send(result);
        })
    }
})

router.get('/update/script', (request, response)=> {
    var src = request.query.src;
    if(src !== null)
    {
        scriptTag.update(src, (result)=> {
            response.send(result);
        })
    }
})

router.get('/remove/script/:id', (request, response)=> {
    var id = request.params.id;
    shop.scriptTag.delete(id).then((result)=> {
        response.send(JSON.stringify(result));
    }).catch((err)=> {
        response.send(JSON.stringify(err));
    });
})

module.exports = router;
