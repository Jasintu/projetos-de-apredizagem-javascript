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
        let n1 = valueInScreen.innerHTML+=evt.target.innerHTML
        if(evt.target.innerHTML == "+"){
            valueInScreen.innerHTML = n1
            let n2 = n1.split("+")
            buttonEqual.addEventListener("click", function(){
                console.log(n1[0] + n1[1])
            })

            
        }

    })
})


let mathOprators = {
    sum : function(){
        return n1 + n2
    },
    minus : function(){
        return n1 - n2
    },
    division : function(){
        return n1 / n2
    },
    multiplication : function(){
        return n1 * n2
    }
}

clean.addEventListener("click", function(){
    valueInScreen.innerHTML = ""
})
