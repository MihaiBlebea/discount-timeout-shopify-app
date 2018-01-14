const shop = require('../api/shopify.js');

const root = process.env.ROOT;

function insert(path, callback)
{
    getMainTheme((theme)=> {
        var payload = {
            key: path,
            src: root + '/snippets/timer.liquid'
        }

        if(theme !== null)
        {
            shop.asset.create(theme.id, payload).then((result)=> {
                callback(result)
            }).catch((err)=> {
                console.log(err)
            })
        }
    })
}

function remove(path, callback)
{
    getMainTheme((theme)=> {
        if(theme !== null)
        {
            shop.asset.delete(theme.id, { key: 'snippets/timer.liquid' }).then((result)=> {
                callback(result)
            }).catch((err)=> {
                console.log(err)
            })
        }
    });
}

function getMainTheme(callback)
{
    shop.theme.list({ limit: 5 }).then((themes)=> {
        if(themes !== null)
        {
            let mainThemeId = null;
            for(var i = 0; i < themes.length; i++)
            {
                if(themes[i].role === 'main')
                {
                    callback(themes[i]);
                    break;
                }
            }
        }
    }).catch((err)=> {
        console.log(err)
    })
}

module.exports = {
    getMainTheme,
    insert,
    remove
}
