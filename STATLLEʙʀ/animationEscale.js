"use strict"

let swith = false

function girar (){
    $(".iconArrow").css({
        "animation" : "girar 0.3s linear",
        "transform" : "rotate(180deg)"
    })
    console.log("girar sendo executado")
}

function girarReverse (){
    $(".iconArrow").css({
        "animation" : "girarReverse 0.3s linear",
        "transform" : "rotate(0deg)"
    })
    console.log("girarReverse sendo executado")
}

$("summary").click(function(){ 
    if(swith){
        girarReverse()
    } else{
        girar()
    }
    swith = !swith
});
