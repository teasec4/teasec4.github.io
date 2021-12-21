let timerIn1 = document.getElementById("timerIn");

button.addEventListener('click', function () {
    secondsIn = 1
})

timer = setInterval(function () {

    if (document.getElementById("Choice1").checked === true){
        if(secondsIn >=1 && secondsIn<6){
            timerIn1.style.color = '#F2E18D'

        }
        if (secondsIn >=6 && secondsIn<16){
            timerIn1.style.color = 'red'

        }
        if (secondsIn >=16){
            secondsIn=1
            timerIn1.style.color = '#F2E18D'

        }
    }

    if (document.getElementById("Choice2").checked === true){
        if(secondsIn >=1 && secondsIn<9){
            timerIn1.style.color = '#F2E18D'

        }
        if (secondsIn >=9 && secondsIn<24){
            timerIn1.style.color = 'red'

        }
        if (secondsIn >=24){
            secondsIn=1
            timerIn1.style.color = '#F2E18D'

        }
    }

    if (document.getElementById("Choice3").checked === true){
        if(secondsIn >=1 && secondsIn<11){
            timerIn1.style.color = '#F2E18D'

        }
        if (secondsIn >=11 && secondsIn<31){
            timerIn1.style.color = 'red'

        }
        if (secondsIn >=31){
            secondsIn=1
            timerIn1.style.color = '#F2E18D'
        }
    }

    let strTimerIn = `${secondsIn}`;
    timerIn.innerHTML = strTimerIn;

    ++secondsIn;


}, 1000);



