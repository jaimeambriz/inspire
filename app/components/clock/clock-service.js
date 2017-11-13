function ClockService(){
console.log("hello im in the service")


GetCurrentTime = function GetCurrentTime(){
    var d = new Date(); 
    d.getHours(); 
    d.getMinutes(); 
    d.getSeconds();
return d
}
GetCurrentTime()
console.log("get current time", GetCurrentTime())
}