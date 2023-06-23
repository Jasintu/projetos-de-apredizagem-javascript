"use strict"

//math operator 
let plus = document.getElementById("buttonPlus")
let minus = document.getElementById("buttonMinus")
let division = document.getElementById("buttonDivision")
let clean = document.getElementById("buttonAC")
let numbers = document.querySelectorAll("button")
let displaynone = document.getElementById("displaynoneoff")
let buttonEqual = document.getElementById("buttonEqual")

// exibiçao da tela
let valueInScreen = document.getElementById("screen")
//


numbers.forEach((el) =>{
    el.addEventListener("click", function(evt){
        let num = valueInScreen.innerHTML+=evt.target.innerHTML
        let string = num.toString()
        let finalMinus = string.split("-")
        let finalPlus = string.split("+")
        let finalMultipli = string.split("x")
        let finalDivision = string.split("÷")
        let finalPorcent = string.split("%")
        buttonEqual.addEventListener("click", function(){
            if(num.includes("x")){
                valueInScreen.innerHTML = finalMultipli[0] * finalMultipli[1]
            }
            else if(num.includes("-")){
                valueInScreen.innerHTML = finalMinus[1] - finalMinus[0]
            }
            else if(num.includes("+")){
                valueInScreen.innerHTML = finalPlus[0] + finalPlus[1] 
            }
            else if(num.includes("÷")){
                valueInScreen.innerHTML = finalDivision[1] / finalDivision[0]
            }
            else if(num.includes("%")){
                valueInScreen.innerHTML = (finalPorcent[1] / 100) * finalPorcent[0]
            }
        })
    })
})


clean.addEventListener("click", function(){
    valueInScreen.innerHTML = " "
})
