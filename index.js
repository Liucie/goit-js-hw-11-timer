// class CountdownTimer{
//     constructor() {
//         this.refs = {
//             sec: document.querySelector('[data-value="secs"]')
//         }
//     }
// }

// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

refs = {
    secs: document.querySelector('[data-value="secs"]'),
    mins: document.querySelector('[data-value="mins"]'),
    hours: document.querySelector('[data-value="hours"]'),
    days: document.querySelector('[data-value="days"]')
}
let id = null;
let targetDate = null;
        
function calc() {
    const currentDate = Date.now();
    const time = (targetDate - currentDate) / 1000;

    const secs = Math.floor((time % (1000 * 60)) / 1000);
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const days = Math.floor(time / (1000 * 60 * 60 * 24));

    refs.secs.textContent = secs;
    refs.mins.textContent = mins;
    refs.hours.textContent = hours;
    refs.days.textContent = days;
}

function timerOn() {
    targetDate = new Date('Sep 13, 2022');
    id = setInterval(calc, 1000);
    console.log("targetDate", targetDate);
}

window.addEventListener("DOMContentLoaded", timerOn);