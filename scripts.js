console.log("Clock");
  
function getTime() {
    var x = new Date();
    document.getElementById('clock').innerHTML = x;
    setTimeout(getTime, 1000);
}