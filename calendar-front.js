// This function receives the Google Calendar JSON and injects the data into the frontend
function replaceElements(response) {
    // Get number of entries present in JSON
    var numEntries = response["result"]["items"].length;
    var count = 0;
    var numDel = 0;
    // See how many entries need to be ignored (capped at 4 events)
    if (numEntries < 4) {
        numDel = 4 - numEntries;
    }
    // Iterate through each entry                                      
    while (numEntries > 0) {
        // If we pass the 4th event, break
        if (count > 3) {
            break;
        }
        // Get name from JSON
        var name = response["result"]["items"][count]["summary"];
        // Clip off end if too long
        if (name.length > 26) {
            name = name.substring(0,26) + "...";
        }
        // Get start and end times
        var time = response["result"]["items"][count]["start"]["dateTime"];
        var timeEndT = response["result"]["items"][count]["end"]["dateTime"];
        console.log(time);
        // Various string manip to get hour and minute
        var dashIdx = time.indexOf('T');
        var dashIdx2 = timeEndT.indexOf('T');
        var timeStart = time.substring(dashIdx+1,dashIdx+6);
        var timeStartHour = Number(timeStart.substring(0,2));
        var timeStartMin = Number(timeStart.substring(3,5));
        timeStartMin = timeStartMin.toString();
        // Add zero to minute if it is 1 digit
        timeStartMin = (timeStartMin.length != 1) ? timeStartMin : "0" + timeStartMin;
        // Get AM/PM suffix
        var sufS = (timeStartHour > 11) ? "PM" : "AM";
        // Convert 24-hour time to 12-hour time
        timeStartHour = timeStartHour % 12;
        if (timeStartHour == 0) {
            timeStartHour = 12;
        }
        var timeEnd = timeEndT.substring(dashIdx2+10,dashIdx2+15);
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
        // Formatted time
        var timeF = timeStartHour.toString() + ":" + timeStartMin.toString() + sufS;
        
        // Inject name/time into entry
        document.getElementsByClassName("event-entry")[count].innerHTML = "<h1>"+name+"</h1><p>"+timeF+"</p>";
        numEntries--;
        count++;
    }


    while (numDel > 0) {
        // If there are less than 4 entries remove the div for leftover items
        document.getElementsByClassName("event-entry")[count].style.display = 'none';
        count++;
        numDel--;
    }

}