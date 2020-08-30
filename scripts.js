console.log("Clock");

var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  
function showTime() {
    var datetime = new Date();
    document.getElementById('date').innerHTML = days[datetime.getDay()] + ', ' + months[datetime.getMonth()] + ' ' + datetime.getDate() + ', ' + datetime.getFullYear(); 
    document.getElementById('localtime').innerHTML = datetime.toLocaleTimeString();
    setTimeout(showTime, 1000);
}

function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
    var link = document.getElementsByTagName('a')[0];
    link.classList.toggle("dark-mode");
}

var deadline = new Date("Aug 30, 2020 23:56:00").getTime();

function getCountdown() {
    
}

var showCountdown = function() {
    var interval = setInterval(function() {
        var now = new Date().getTime(); 
        var t = deadline - now;
        var days = Math.floor(t / (1000 * 60 * 60 * 24)); 
        var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60)); 
        var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60)); 
        var seconds = Math.floor((t % (1000 * 60)) / 1000); 
        if (t > 0) {
            document.getElementById("countdown").innerHTML = days + " Days "  
        + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";
        } else if (t <= 0) {
            days = hours = minutes = seconds = 0;
            document.getElementById("countdown").innerHTML = days + " Days "  
        + hours + " Hours " + minutes + " Minutes " + seconds + " Seconds ";
            clearInterval(interval);
            document.getElementById("message").innerHTML = "Happy New Year 2021!!!";
        }
    }, 1000);
}