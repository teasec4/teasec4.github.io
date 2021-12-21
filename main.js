let buttonClicked = document.getElementById("buttonClicked")
let timerShow = document.getElementById("timer");
let timerShow2 = document.getElementById("timer3")
let timerIn = document.getElementById("timerIn");
let timerColor = document.getElementById('timerColor')
let helpcolor = document.getElementById('timer2')

let button = document.getElementById("timerIn");

button.addEventListener('click', function (){
    timerIn.style.paddingBottom = '.5em'
    timerIn.style.paddingTop = '.5em'

    buttonClicked.style.width = '60%'

    timerIn.style.backgroundColor = '#D95F69'
    timerIn.style.borderRadius = '.5em'
    timerIn.style.fontSize = '13em'

    timerColor.style.backgroundColor = '#D95F69'
    timerShow.style.backgroundColor = '#D95F69'
    timerShow2.style.backgroundColor = '#D95F69'
    helpcolor.style.backgroundColor = '#D95F69'

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

    if (timeMinut <=0){
        clearInterval(timer);
        timerShow.innerHTML = '--'
        timerShow2.innerHTML = '--'
    } else {

        let timerfinish1 = `${Math.trunc(minutes)}`;
        let timerfinish2 = `${seconds}`;

        if (timerfinish1 >= 0 && timerfinish1 <= 9 ){
            timerShow.innerHTML = "0" + timerfinish1;
        } else {
            timerShow.innerHTML = timerfinish1 ;
        }

        if (timerfinish2 >= 0 && timerfinish2 <= 9 ){
            timerShow2.innerHTML = "0" + timerfinish2;
        } else {
            timerShow2.innerHTML= timerfinish2;
        }

    }
    --timeMinut;
},1000)