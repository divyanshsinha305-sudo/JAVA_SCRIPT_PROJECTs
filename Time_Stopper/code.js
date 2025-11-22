const display=document.getElementById('display');
let time = null
let starttime = 0;
let elapsed = 0;
let running = false;

function start(){
    if(!running){
        starttime = Date.now() - elapsed;
        time = setInterval(update, 10);
        running = true;
    }
}
function stop(){
    if(running){
        clearInterval(time);
        elapsed = Date.now() - starttime;
        running = false;
    }
}
function reset(){
    clearInterval(time);
    time = null;
    starttime = 0;
    elapsed = 0;
    running = false;
    display.textContent = "00:00:00.000";
}
function update(){
    elapsed = Date.now() - starttime;
    let milliseconds = parseInt((elapsed % 1000));
    let seconds = parseInt((elapsed / 1000) % 60);
    let minutes = parseInt((elapsed / (1000 * 60)) % 60);
    let hours = parseInt((elapsed / (1000 * 60 * 60)) % 24);
    display.textContent =
        (hours < 10 ? "0" + hours : hours) + ":" +
        (minutes < 10 ? "0" + minutes : minutes) + ":" +
        (seconds < 10 ? "0" + seconds : seconds) + "." +
        (milliseconds < 100 ? (milliseconds < 10 ? "00" + milliseconds : "0" + milliseconds) : milliseconds);
}