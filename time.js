// Function retrieves the current date/time and injects it into the fronend
var x = setInterval(function() {
    // Getting current date/time
    var date = new Date();
    var year = date.getFullYear();
    const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    const DAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var month = MONTHS[date.getMonth()];
    var day = DAYS[date.getDay()];
    var dayNum = date.getDate();
    // Insert various days and times
    document.getElementById("month-year").innerHTML = month + " " + year;
    document.getElementById("day").innerHTML = day;
    document.getElementById("day-num").innerHTML = dayNum;
    console.log(day+dayNum+month+year);

    var hour = new Date().getHours();
    // Get AM/PM suffix
    var suf = (hour > 11) ? " PM" : " AM";
    // Convert to 12 hour time
    hour = hour % 12;
    if (hour == 0) {
        hour = 12;
    }
    var min = new Date().getMinutes();
    min = min.toString();
    // Add extra zero if minutes has only 1 digit
    min = (min.length != 1) ? min : "0" + min;
    var time = hour + ":" + min;
    document.getElementById("time").innerHTML = time + suf;

    return false;
},1000);

