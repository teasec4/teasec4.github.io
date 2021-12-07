let timerIn = document.getElementById("timerIn");
let text = document.getElementById("text1");

buttonRun.addEventListener('click', function () {
    secondsIn = 0
})

timer = setInterval(function () {
    if(secondsIn >=0 && secondsIn<11){
        timerIn.style.color = '#29f129'
        text.innerText = "Вдох"
    }
    if (secondsIn >=11 && secondsIn<31){
        timerIn.style.color = 'red'
        text.innerText = "Выдох"
    }
    if (secondsIn >=31){
        secondsIn=0
        timerIn.style.color = '#29f129'
        text.innerText = "Вдох"
    }

    let strTimerIn = `${secondsIn}`;
    timerIn.innerHTML = strTimerIn;

    ++secondsIn;


}, 1000);



