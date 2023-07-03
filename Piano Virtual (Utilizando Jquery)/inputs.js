"use strict"

//teclas brancas por click

let pianoKeysWhite = {
    do1 : $("[name='do1']").click(()=>{
        let audio = $("#do1")[0]
        audio.play()
        audio.currentTime = 0
    }),
    re1 : $("[name='re1']").click(()=>{
        let audio = $("#re1")[0]
        audio.play()
        audio.currentTime = 0
    }),
    mi1 : $("[name='mi1']").click(()=>{
        let audio = $("#mi1")[0]
        audio.play()
        audio.currentTime = 0
    }),
    fa1 : $("[name='fa1']").click(()=>{
        let audio = $("#fa1")[0]
        audio.play()
        audio.currentTime = 0
    }),
    sol1 : $("[name='sol1']").click(()=>{
        let audio = $("#sol1")[0]
        audio.play()
        audio.currentTime = 0
    }),
    la1 : $("[name='la1']").click(()=>{
        let audio = $("#la1")[0]
        audio.play()
        audio.currentTime = 0
    }),
    si1 : $("[name='si1']").click(()=>{
        let audio = $("#si1")[0]
        audio.play()
        audio.currentTime = 0
    }),
    do2 : $("[name='do2']").click(()=>{
        let audio = $("#do2")[0]
        audio.play()
        audio.currentTime = 0
    }),
    re2 : $("[name='re2']").click(()=>{
        let audio = $("#re2")[0]
        audio.play()
        audio.currentTime = 0
    }),
    mi2 : $("[name='mi2']").click(()=>{
        let audio = $("#mi2")[0]
        audio.play()
        audio.currentTime = 0
    }),
    fa2 : $("[name='fa2']").click(()=>{
        let audio = $("#fa2")[0]
        audio.play()
        audio.currentTime = 0
    }),
    sol2 : $("[name='sol2']").click(()=>{
        let audio = $("#sol2")[0]
        audio.play()
        audio.currentTime = 0
    }),
    la2 : $("[name='la2']").click(()=>{
        let audio = $("#la2")[0]
        audio.play()
        audio.currentTime = 0
    }),
    si2 : $("[name='si2']").click(()=>{
        let audio = $("#si2")[0]
        audio.play()
        audio.currentTime = 0
    }),
    do3 : $("[name='do3']").click(()=>{
        let audio = $("#do3")[0]
        audio.play()
        audio.currentTime = 0
    }),
    re3 : $("[name='re3']").click(()=>{
        let audio = $("#re3")[0]
        audio.play()
        audio.currentTime = 0
    }),
    mi3 : $("[name='mi3']").click(()=>{
        let audio = $("#mi3")[0]
        audio.play()
        audio.currentTime = 0
    }),
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
    })
}

//teclas pretas por click

let blackKeys ={
    dore1 : $("#dore1").click(function(event){
        let audio = $("#do1")[0]
        let audio2 = $("#re1")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    remi1 : $("#remi1").click(function(event){
        let audio = $("#re1")[0]
        let audio2 = $("#mi1")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    fasol1 : $("#fasol1").click(function(event){
        let audio = $("#fa1")[0]
        let audio2 = $("#sol1")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    solla1 : $("#solla1").click(function(event){
        let audio = $("#sol1")[0]
        let audio2 = $("#la1")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    lasi1 : $("#lasi1").click(function(event){
        let audio = $("#la1")[0]
        let audio2 = $("#si1")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    dore2 : $("#dore2").click(function(event){
        let audio = $("#do2")[0]
        let audio2 = $("#re2")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    remi1 : $("#remi2").click(function(event){
        let audio = $("#re2")[0]
        let audio2 = $("#mi2")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    fasol2 : $("#fasol2").click(function(event){
        let audio = $("#fa2")[0]
        let audio2 = $("#sol2")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    solla2 : $("#solla2").click(function(event){
        let audio = $("#sol2")[0]
        let audio2 = $("#la2")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    lasi2 : $("#lasi2").click(function(event){
        let audio = $("#la2")[0]
        let audio2 = $("#si2")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    dore3 : $("#dore3").click(function(event){
        let audio = $("#do3")[0]
        let audio2 = $("#re3")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    remi3 : $("#remi3").click(function(event){
        let audio = $("#re3")[0]
        let audio2 = $("#mi3")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    fasol3 : $("#fasol3").click(function(event){
        let audio = $("#fa3")[0]
        let audio2 = $("#sol3")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    solla3 : $("#solla3").click(function(event){
        let audio = $("#sol3")[0]
        let audio2 = $("#la3")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
    lasi3 : $("#lasi3").click(function(event){
        let audio = $("#la3")[0]
        let audio2 = $("#si3")[0]
        audio.play()
        audio2.play()
        audio.currentTime = 0
        audio2.currentTime = 0
    }),
}

//teclas brancas via teclado

let keyboardsWhite = {
    q : $(document).keydown(function(event){        
        if (event.key === "q") {
            let audio = $("#do1")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    w : $(document).keydown(function(event){        
        if (event.key === "w") {
            let audio = $("#re1")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    e : $(document).keydown(function(event){        
        if (event.key === "e") {
            let audio = $("#mi1")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    r : $(document).keydown(function(event){        
        if (event.key === "r") {
            let audio = $("#fa1")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    t : $(document).keydown(function(event){        
        if (event.key === "t") {
            let audio = $("#sol1")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    y : $(document).keydown(function(event){        
        if (event.key === "y") {
            let audio = $("#la1")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    u : $(document).keydown(function(event){        
        if (event.key === "u") {
            let audio = $("#si1")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    i : $(document).keydown(function(event){        
        if (event.key === "i") {
            let audio = $("#do2")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    o : $(document).keydown(function(event){        
        if (event.key === "o") {
            let audio = $("#re2")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    p : $(document).keydown(function(event){        
        if (event.key === "p") {
            let audio = $("#mi2")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    a : $(document).keydown(function(event){        
        if (event.key === "a") {
            let audio = $("#fa2")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    s : $(document).keydown(function(event){        
        if (event.key === "s") {
            let audio = $("#sol2")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    d : $(document).keydown(function(event){        
        if (event.key === "d") {
            let audio = $("#la2")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    f : $(document).keydown(function(event){        
        if (event.key === "f") {
            let audio = $("#si2")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    g : $(document).keydown(function(event){        
        if (event.key === "g") {
            let audio = $("#do3")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    h : $(document).keydown(function(event){        
        if (event.key === "h") {
            let audio = $("#re3")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    j : $(document).keydown(function(event){        
        if (event.key === "j") {
            let audio = $("#mi3")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    k : $(document).keydown(function(event){        
        if (event.key === "k") {
            let audio = $("#fa3")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    l : $(document).keydown(function(event){        
        if (event.key === "l") {
            let audio = $("#sol3")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    ç : $(document).keydown(function(event){        
        if (event.key === "ç") {
            let audio = $("#la3")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
    z : $(document).keydown(function(event){        
        if (event.key === "z") {
            let audio = $("#si3")[0]
            audio.play()
            audio.currentTime = 0
        }
    }),
}

//teclas pretas via teclado

let keyBoardBlack = {
    1 : $(document).keydown(function(event){
            if (event.key === "1") {
                let audio = $("#do1")[0]
                let audio2 = $("#re1")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    2 : $(document).keydown(function(event){
            if (event.key === "2") {
                let audio = $("#re1")[0]
                let audio2 = $("#mi1")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    3 : $(document).keydown(function(event){
            if (event.key === "3") {
            let audio = $("#fa1")[0]
            let audio2 = $("#sol1")[0]
            audio.play()
            audio2.play()
            audio.currentTime = 0
            audio2.currentTime = 0
        }
    }),
    4 : $(document).keydown(function(event){
            if (event.key === "4") {
                let audio = $("#sol1")[0]
                let audio2 = $("#la1")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    5 : $(document).keydown(function(event){
            if (event.key === "5") {
                let audio = $("#la1")[0]
                let audio2 = $("#si1")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    6 : $(document).keydown(function(event){
            if (event.key === "6") {
                let audio = $("#do2")[0]
                let audio2 = $("#re2")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    7 : $(document).keydown(function(event){
            if (event.key === "7") {
                let audio = $("#re2")[0]
                let audio2 = $("#mi2")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    8 : $(document).keydown(function(event){
            if (event.key === "8") {
                let audio = $("#fa2")[0]
                let audio2 = $("#sol2")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    9 : $(document).keydown(function(event){
            if (event.key === "9") {
                let audio = $("#sol2")[0]
                let audio2 = $("#la2")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    0 : $(document).keydown(function(event){
            if (event.key === "0") {
                let audio = $("#la2")[0]
                let audio2 = $("#si2")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    x : $(document).keydown(function(event){
            if (event.key === "x") {
                let audio = $("#do3")[0]
                let audio2 = $("#re3")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    c : $(document).keydown(function(event){
            if (event.key === "c") {
                let audio = $("#re3")[0]
                let audio2 = $("#mi3")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    v : $(document).keydown(function(event){
            if (event.key === "v") {
                let audio = $("#fa3")[0]
                let audio2 = $("#sol3")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    b : $(document).keydown(function(event){
            if (event.key === "b") {
                let audio = $("#fa3")[0]
                let audio2 = $("#sol3")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    n : $(document).keydown(function(event){
            if (event.key === "n") {
                let audio = $("#sol3")[0]
                let audio2 = $("#la3")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
    m : $(document).keydown(function(event){
            if (event.key === "m") {
                let audio = $("#la3")[0]
                let audio2 = $("#si3")[0]
                audio.play()
                audio2.play()
                audio.currentTime = 0
                audio2.currentTime = 0
        }
    }),
}

//local de criaçao de animaçoes de teclado

$(document).keypress(function(){
    $(".keyWhite").addClass("whiteKeysToggle") 
    console.log("oi")
})

$(document).keypress(function(){
    setTimeout(function() {
    $(".keyWhite").removeClass("whiteKeysToggle") 
    }, 100)
})