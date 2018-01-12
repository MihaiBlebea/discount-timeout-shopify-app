const Shopify = require('shopify-api-node');
const token = process.env.SHOPIFY_TOKEN;

const shop = new Shopify({
    shopName: 'mihaidev',
    accessToken: token
});

function set(src, callback)
{
    shop.scriptTag.list({ limit: 50 }).then((result)=> {
        if(result !== null)
        {
            var exists = false;
            for(var i = 0; i < result.length; i++)
            {
                if(result[i].src == src)
                {
                    exists = true;
                }
            }
        
            if(exists == false)
            {
                shop.scriptTag.create({
                    event: 'onload',
                    src: src
                }).then((res)=> {
                    callback({activated: true});
                }).catch((err)=> {
                    callback({activated: false, err: err});
                });
            } else {
                callback({activated: false, err: 'Script tag already exists'});
            }
        }
    }).catch((err)=> {
        callback({activated: false, err: err});
    });
}

module.exports = {
    set
}
