function writeTodaysDate(){
    var now = new Date();
    var clock = "";
    clock = now.getHours() + ":" + now.getMinutes();
    document.getElementById("today_date").innerHTML = clock;
}

function writeLastModificationDate(){
    var string = "";
    string = document.lastModified  ;
    document.getElementById("last_modified").innerHTML = string;
}