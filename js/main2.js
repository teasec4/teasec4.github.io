let timerIn = document.getElementById("timerIn");
let text = document.getElementById("text1");

buttonRun.addEventListener('click', function () {

    secondsIn = 1
})

timer = setInterval(function () {

    if (document.getElementById("Choice1").checked === true){
        if(secondsIn >=1 && secondsIn<6){
            timerIn.style.color = '#29f129'
            text.innerText = "inhale"
        }
        if (secondsIn >=6 && secondsIn<16){
            timerIn.style.color = 'red'
            text.innerText = "exhale"
        }
        if (secondsIn >=16){
            secondsIn=1
            timerIn.style.color = '#29f129'
            text.innerText = "inhale"
        }
    }

    if (document.getElementById("Choice2").checked === true){
        if(secondsIn >=1 && secondsIn<9){
            timerIn.style.color = '#29f129'
            text.innerText = "inhale"
        }
        if (secondsIn >=9 && secondsIn<24){
            timerIn.style.color = 'red'
            text.innerText = "exhale"
        }
        if (secondsIn >=24){
            secondsIn=1
            timerIn.style.color = '#29f129'
            text.innerText = "inhale"
        }
    }

    if (document.getElementById("Choice3").checked === true){
        if(secondsIn >=1 && secondsIn<11){
            timerIn.style.color = '#29f129'
            text.innerText = "inhale"
        }
        if (secondsIn >=11 && secondsIn<31){
            timerIn.style.color = 'red'
            text.innerText = "exhale"
        }
        if (secondsIn >=31){
            secondsIn=1
            timerIn.style.color = '#29f129'
            text.innerText = "inhale"
        }
    }

    let strTimerIn = `${secondsIn}`;
    timerIn.innerHTML = strTimerIn;

    ++secondsIn;


}, 1000);



