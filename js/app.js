var countDownDate = new Date("jan 1, 2024 12:30:20").getTime();

var x = setinterval(function() {



var now = new Date().gettime();

var distance = countdowndate - now;

var days = math.floor(distance / (1000* 60* 60* 24));
var hours = math.floor((distance % (1000* 60* 60* 24)) / (1000 * 60 * 60));
var minutes = math.floor((distance % (1000* 60* 60* 24)) / (1000 * 60));
var minutes = math.floor((distance % (1000* 60* 60* 24)) / 1000);

document.getElementById("demo").innerHTML = days +"d" + hours + "h"
minutes + "m" + seconds + "s";




if(distance < 0){
clearInterval(x);
document.getElementById("demo").innerHTML = "basarchu";
 }
}, 1000)