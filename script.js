let [seconds, minutes, hours] = [0, 0, 0];

let time = document.getElementsByClassName('time')[0];
let timer = null;

function stop() {
    seconds++;
    if (seconds == 60) {
        seconds = 0;
        minutes++;

        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
    let h = hours < 10 ? '0' + hours : hours;
    let m = minutes < 10 ? '0' + minutes : minutes;
    let s = seconds < 10 ? '0' + seconds : seconds;

    time.innerHTML = h + ':' + m + ':' + s;
}

function start() {
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stop, 1000);
}

function timeStop(){
    clearInterval(timer);
}

function timeReset(){
    clearInterval(timer);
    [seconds, minutes, hours] = [0,0,0];
    time.innerHTML = '00:00:00';
}

