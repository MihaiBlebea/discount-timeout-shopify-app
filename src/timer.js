(function() {
    let today = new Date();
    let timeout = '2018/06/22 18:20:20';

    alert(timeout)

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

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return days + " days " + hours + ":" + minutes + ":" + seconds;
    }

    function tick()
    {
        setInterval(function() {
            let today = new Date().toString();
            let timeout = '2018/01/14 10:20:20';
            let diff = compare(stringToUnix(today), stringToUnix(timeout));
            let tick = msToTime(diff);
            console.log(tick)
        }, 1000)
    }

    tick();

})();
