"use strict"

let swith = false

let pianoKeys = {
    la3 : document.querySelector('[name="la3"]').addEventListener("click", function(){
        sounds.si3.pause()
    }),
    si3 : document.querySelector('[name="si3"]').addEventListener("click", function(){
        sounds.si3.play()
    })
}

let sounds = {
    si3 : document.getElementById("si3")
}


