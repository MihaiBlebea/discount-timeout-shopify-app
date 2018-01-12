(function() {
    let today = new Date();
    let timeout = '2018/06/22 18:20:20';

    alert(timeout)
    
    function compare(tsStart, tsEnd)
    {
        let diff = tsEnd - tsStart;
        return new Date(diff)
    }

    function stringToDate(string)
    {
        let date = new Date(string)
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let second = date.getSeconds();
        let minute = date.getMinutes();
        let hour = date.getHours();

        return {
            year: year,
            month: month,
            day: day,
            hour: hour,
            minute: minute,
            second: second
        }
    }

    function format(time)
    {
        if(time.toString().length < 2)
        {
            return '0' + time;
        }
        return time;
    }

})();
