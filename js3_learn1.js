function writeLastModificationDate(){
    var string = ""
   // string =  document.lastModified;
    document.getElementById("lastModified").innerHTML = document.lastModified + " ";
}
function writeTodaysDate(){
    now = new Date();
    document.getElementById("todayDate").innerHTML = now;
    now_time = now.getHours() + ":" + now.getMinutes();
    document.getElementById("clock").innerHTML = now_time;
}