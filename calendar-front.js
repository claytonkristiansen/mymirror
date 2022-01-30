function replaceElements(response) {
    var numEntries = response["result"]["items"].length;
    var count = 0;
    var numDel = 0;
    if (numEntries < 4) {
        numDel = 4 - numEntries;
    }
                                                  
    while (numEntries > 0) {
        if (count > 3) {
            break;
        }
        var name = response["result"]["items"][count]["summary"];
        if (name.length > 26) {
            name = name.substring(0,26) + "...";
        }
        var time = response["result"]["items"][count]["start"]["dateTime"];
        console.log(time);
        var dashIdx = time.indexOf('T');
        var timeStart = time.substring(dashIdx+1,dashIdx+6);
        var timeStartHour = Number(timeStart.substring(0,2));
        var timeStartMin = Number(timeStart.substring(3,5));
        timeStartMin = timeStartMin.toString();
        timeStartMin = (timeStartMin.length != 1) ? timeStartMin : "0" + timeStartMin;
        var sufS = (timeStartHour > 11) ? "PM" : "AM";
        timeStartHour = timeStartHour % 12;
        if (timeStartHour == 0) {
            timeStartHour = 12;
        }
        var timeEnd = time.substring(dashIdx+10,dashIdx+15);
        var timeEndHour = Number(timeEnd.substring(0,2));
        var timeEndMin = Number(timeEnd.substring(3,5));
        timeEndMin = timeEndMin.toString();
        timeEndMin = (timeEndMin.length != 1) ? timeEndMin : "0" + timeEndMin;
        var sufE = (timeEndHour > 11) ? "PM" : "AM";
        timeEndHour= timeEndHour % 12;
        if (timeEndHour == 0) {
            timeEndHour = 12;
        }
        console.log(count + ": StartTime:"+timeStart+" EndTime:"+timeEnd)
        var timeF = timeStartHour.toString() + ":" + timeStartMin.toString() + sufS + "-" + timeEndHour.toString() + ":" + timeEndMin.toString() + sufE;
        
        document.getElementsByClassName("event-entry")[count].innerHTML = "<h1>"+name+"</h1><p>"+timeF+"</p>";
        numEntries--;
        count++;
    }


    while (numDel > 0) {
        document.getElementsByClassName("event-entry")[count].style.display = 'none';
        count++;
        numDel--;
    }

}