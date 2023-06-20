"use strict"

let buttonStart = document.getElementById("startButton")
let buttonStop = document.getElementById("stopButton")
let buttonReset = document.getElementById("resetButton")
let stopWatchCont = document.getElementById("stopWatch")
let numberInScreen = stopWatchCont.innerHTML.split(":")

let second = 1
let min = 0
let hour = 0

buttonStart.addEventListener("click", function oi (){
    
    function twoDigits(digit){
        if(digit < 10){
            return "0" + digit
        } else {
            return digit
        }
    }

    let interval = setInterval(() => {

        let second1 = second++
        let min1 = min
        let hour1 = hour

        if(second1 == 59){
            second = 0
            min1 = min++
        }else if(min1 == 60){
            min = 0
            hour1 = hour++
        }

        stopWatchCont.innerHTML =  twoDigits(hour1) + ":" + twoDigits(min1) + ":" + twoDigits(second1)


    }, 1000);



    stopButton.addEventListener("click", function(){
        clearInterval(interval)
        buttonStart.addEventListener("click", oi)
    })

    resetButton.addEventListener("click", function(){
        
        second = 1
        min = 0
        hour = 0

        clearInterval(interval)
        stopWatchCont.innerHTML =  "00:00:00"

        buttonStart.addEventListener("click", oi)
    })

    buttonStart.removeEventListener("click", oi)
})




