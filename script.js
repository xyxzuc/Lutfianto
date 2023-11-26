const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');
const meridiemEl = document.getElementById('ampm');
let mm = document.getElementById('mm');
let hh = document.getElementById('hh');
let ss = document.getElementById('ss');
let hr_dot = document.querySelector('.hr_dot');
let min_dot = document.querySelector('.min_dot');
let sec_dot = document.querySelector('.sec_dot');


function getTime(){
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let isAm = hours < 12;
    
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');

    if(hours > 12){
        hours = hours - 12;
    }
    // if(hours == '00'){
    //     hours = '12'
    // }else{
    //     hours = hours
    // }

    hoursEl.innerHTML = hours + "<br><span>Hours</span>";
    minutesEl.innerHTML = minutes + "<br><span>minutes</span>";
    secondsEl.innerHTML = seconds + "<br><span>Seconds</span>";
    meridiemEl.textContent = isAm ? 'AM': 'PM';

    hh.style.strokeDashoffset = 440 - (440 * hours)/12;
    mm.style.strokeDashoffset = 440 - (440 * minutes)/60;
    ss.style.strokeDashoffset = 440 - (440 * seconds)/60;

    hr_dot.style.transform = `rotate(${hours * 30}deg)`;// 360/12 = 30
    min_dot.style.transform = `rotate(${minutes * 6}deg)`; // 360/60 = 6
    sec_dot.style.transform = `rotate(${seconds * 6}deg)`; // 360/60 = 6
}

setInterval(getTime, 100)