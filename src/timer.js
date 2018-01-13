(function() {
    console.log('Script tag is mounted and activated')
    let el = document.getElementById('discount-timeout');

    if(el !== null)
    {
        getConfig('https://discount-timeout.herokuapp.com/get/config', (response)=> {
            let today = new Date();
            let timeout = new Date().setDate(today.getDate() + 3);

            if(response.timeout !== null)
            {
                console.log(response.timeout)
                timeout = response.timeout;
            }
            console.log(timeout);
            // Call the tick method to start countdown
            // Pass the final date of the promotion to the method
            tick(timeout);
        })
    }

    function compare(start, end)
    {
      let diff = end - start;
      return diff;
    }

    function stringToUnix(string)
    {
        let date = new Date(string);
        if(typeof date == 'object')
        {
             return parseInt((date.getTime()).toFixed(0))
        }
    }

    function msToTime(duration)
    {
        var milliseconds = parseInt((duration % 1000) / 100)
        var seconds = parseInt((duration / 1000) % 60)
        var minutes = parseInt((duration / (1000 * 60)) % 60)
        var hours = parseInt((duration / (1000 * 60 * 60)) % 24)
        var days = parseInt((duration / (1000 * 60 * 60 * 24)))

        return {
            days,
            hours,
            minutes,
            seconds,
            milliseconds
        }
    }

    function tick(timeout)
    {
        console.log(timeout)
        setInterval(function(timeout) {
            console.log(timeout)
            let today = new Date().toString();
            let diff = compare(stringToUnix(today), stringToUnix(timeout));
            console.log(diff)
            let tick = render(msToTime(diff));
            el.innerHTML = tick;
        }, 1000)
    }

    function render(payload)
    {
        let minutes = (payload.minutes < 10) ? "0" + payload.minutes : payload.minutes;
        let seconds = (payload.seconds < 10) ? "0" + payload.seconds : payload.seconds;

        let out =   `<div class="note form-success" style="width:100%;display:flex;justify-content:center;">
                        <div style="margin-right: 10px;">${payload.days} days</div>
                        <div style="margin-right: 10px;">${payload.hours} hours</div>
                        <div style="margin-right: 10px;">${minutes} minutes</div>
                        <div>${seconds} seconds</div>
                    </div>`;

        let expire =    `<div class="note form-success" style="width:100%;text-align:center;">
                            This offer has expired. Stay close for more special offers!
                        </div>`;

        return (payload.days == 0 && payload.hours == 0 && payload.minutes == 0 && payload.seconds == 0) ? expire : out;
    }

    function getConfig(url, callback)
    {
        let options = {
            method: 'GET',
            mode: 'cors',
            headers: { Accept: 'application/json' }
        }

        fetch(url, options).then((response)=> {
            return response.json();
        }).then((result)=> {
            callback(result)
        }).catch((err)=> {
            console.log(err);
        });
    }

})();
