function replaceElements(response) {
    var numEntries = response["result"]["items"].length;
    var count = 0;
    while (numEntries > 0) {
        var name = response["result"]["items"][count]["summary"];
        var time = response["result"]["items"][count]["start"]["dateTime"];
        document.getElementsByClassName("event-entry")[count].innerHTML = "<h1>"+name+"</h1><p>"+time+"</p>";
        numEntries--;
        count++;
    }
}