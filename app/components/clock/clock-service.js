function ClockService(){
console.log("hello im in the service")
var time = []

function logError(err) {
    console.error(err)
}



GetCurrentTime = function GetCurrentTime(cb){
    debugger
   $.getJSON('http://api.timezonedb.com/v2/list-time-zone?key=GS8F8GJ13B5X&format=json&country=US&zone=*New*')
   
    .then(res => {
        time = res
        console.log(time)
        cb(time)
    })
    .catch(logError)
}
GetCurrentTime()
console.log("get current time", GetCurrentTime())
}