let buttonRun = document.getElementById("button");
let timerShow = document.getElementById("timer");


buttonRun.addEventListener('click', function () {
    if (document.getElementById("timeChoice1").checked === true){
        timeMinut = 5 * 60
    }
    if (document.getElementById("timeChoice2").checked === true){
        timeMinut = 10 * 60
    }
    if (document.getElementById("timeChoice3").checked === true){
        timeMinut = 15 * 60
    }

})

timer = setInterval(function (){
    seconds = timeMinut%60
    minutes = timeMinut/60%60
    hour = timeMinut/60/60%60
    if (timeMinut <=0){
        clearInterval(timer);
        timerShow.innerHTML = '00:00'
    } else {
        let strTimer = `${Math.trunc(minutes)}:${seconds}`;
        timerShow.innerHTML = strTimer;
    }
    --timeMinut;
},1000)