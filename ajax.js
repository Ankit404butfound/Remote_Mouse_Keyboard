function init() {
        var touchzone = document.getElementById("zone");
        touchzone.addEventListener("touchend", clicke, false);
        touchzone.addEventListener("touchmove", handle, false);
        touchzone.addEventListener("touchstart", tostart, false);
        var scrollzone = document.getElementById("scroll");
        scrollzone.addEventListener("touchmove", scrollmove, false);
        scrollzone.addEventListener("touchstart", tostart, false);
    }
function scrollmove(event){
  var a    = event.touches[0].pageX;
  var b     = event.touches[0].pageY;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  };
  xhttp.open("POST", "scroller", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("a="+a+"&b="+b);
}
function tostart(event){
  var a    = event.touches[0].pageX;
  var b     = event.touches[0].pageY;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  };
  xhttp.open("POST", "tstart", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("a="+a+"&b="+b);
}
function clicke(event) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  };
  var a = event.changedTouches[0].pageY;
  xhttp.open("POST", "click", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("a="+a);
}
function dragm() {
    var btn = document.getElementById("drag");
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    };
    xhttp.open("POST", "dradhandler", true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send();
    
    if (btn.innerHTML == "Drag mouse"){
        btn.innerHTML = "Move mouse";
    }
    else{
        btn.innerHTML = "Drag mouse";
    }
}
    
function sendData(a,b,g) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  };
  xhttp.open("POST", "handler", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("a="+a+"&b="+b);
}
 function handle(event) {
  var alpha    = event.touches[0].pageX;
  var beta     = event.touches[0].pageY;
  sendData(alpha,beta);
}
function on_input(){
  var data = document.getElementById("inpfield").value;
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  };
  xhttp.open("POST", "typed", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("data="+data);
}
function enter_but(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
  };
  xhttp.open("POST", "enter", true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("data="+"data");
}
