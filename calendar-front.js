function replaceElements(response) {
    var numEntries = response["result"]["items"].length;
    var count = 0;
    var numDel = 0;
    if (numEntries < 4) {
        numDel = 4 - numEntries;
    }

    while (numEntries > 0) {
        var name = response["result"]["items"][count]["summary"];
        var time = response["result"]["items"][count]["start"]["dateTime"];
        document.getElementsByClassName("event-entry")[count].innerHTML = "<h1>"+name+"</h1><p>"+time+"</p>";
        numEntries--;
        count++;
    }
<<<<<<< HEAD

=======
    while (numDel > 0) {
        $("#"+count).slideUp();
        count++;
    }
>>>>>>> 160cb50cf85c45f4e768c7a05b8a0967c9fd8559

}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

while(true)
{
    sleep(5).then(() => {
        listUpcomingEvents();
    })
}