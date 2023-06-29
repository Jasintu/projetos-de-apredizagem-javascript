"use strict"

let pianoKeys = {
    fa3 : $("[name='fa3']").click(()=>{
        let audio = $("#fa3")[0]
        audio.play()
        audio.currentTime = 0
    }),
    sol3 : $("[name='sol3']").click(()=>{
        let audio = $("#sol3")[0]
        audio.play()
        audio.currentTime = 0
    }),
    la3 : $("[name='la3']").click(()=>{
        let audio = $("#la3")[0]
        audio.play()
        audio.currentTime = 0
    }),
    si3 : $("[name='si3']").click(()=>{
        let audio = $("#si3")[0]
        audio.play()
        audio.currentTime = 0
    }),
}