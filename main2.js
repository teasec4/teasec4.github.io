let timerIn1 = document.getElementById("timerIn");

coloragaine = 'rgba(75,232,75,0.81)'
coloranaine2 = 'rgba(241,20,47,0.85)'

button.addEventListener('click', function () {
    secondsIn = 1
    timerIn1.style.color = 'white'
})

timer = setInterval(function () {

    if (document.getElementById("Choice1").checked === true){
        if(secondsIn >=1 && secondsIn<6){
            timerIn1.style.backgroundColor = coloragaine

        }
        if (secondsIn >=6 && secondsIn<16){
            timerIn1.style.backgroundColor = coloranaine2

        }
        if (secondsIn >=16){
            secondsIn=1
            timerIn1.style.backgroundColor = coloragaine

        }
    }

    if (document.getElementById("Choice2").checked === true){
        if(secondsIn >=1 && secondsIn<9){
            timerIn1.style.backgroundColor = coloragaine

        }
        if (secondsIn >=9 && secondsIn<24){
            timerIn1.style.backgroundColor = coloranaine2

        }
        if (secondsIn >=24){
            secondsIn=1
            timerIn1.style.backgroundColor = coloragaine

        }
    }

    if (document.getElementById("Choice3").checked === true){
        if(secondsIn >=1 && secondsIn<11){
            timerIn1.style.backgroundColor = coloragaine

        }
        if (secondsIn >=11 && secondsIn<31){
            timerIn1.style.backgroundColor = coloranaine2

        }
        if (secondsIn >=31){
            secondsIn=1
            timerIn1.style.backgroundColor = coloragaine
        }
    }

    let strTimerIn = `${secondsIn}`;
    timerIn.innerHTML = strTimerIn;

    ++secondsIn;


}, 1000);



