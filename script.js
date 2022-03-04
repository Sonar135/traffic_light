const green=document.querySelector("#green");
const red=document.getElementById("red");
const umber=document.querySelector("#umber");

setInterval(light_red()

, 1000)


function light_red(){
    red.style.color="rgba(255, 0, 0, 0.295);"
}