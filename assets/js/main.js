// webcam
var video = document.getElementById('webcam');
if(navigator.mediaDevices.getUserMedia){
    navigator.mediaDevices.getUserMedia({video:true})
    .then(function(s){
        console.log(s);
        video.srcObject=s;
    })
    .catch(function(err){
        console.error("Error getting")
    });

}else{
    console.log("none");
};


// timer
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);
}

window.onload = function () {
    var timer = 40;
    var fiveMinutes = 60 * timer,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
};



// FULL SCREEN
var elem = document.documentElement;
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}



// submit paper
function submitPaper(){
    confirm("Do you want to submit the paper ?");
}