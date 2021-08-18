      
class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.refs = {
            secs: document.querySelector('[data-value="secs"]'),
            mins: document.querySelector('[data-value="mins"]'),
            hours: document.querySelector('[data-value="hours"]'),
            days: document.querySelector('[data-value="days"]'),
            totalTime: document.querySelector('#timer-1')
        };
        this.id = null;
        this.targetDate = targetDate;
        this.selector = selector;
    }
    calc = () => {
        const currentDate = Date.now();
        const time = (this.targetDate - currentDate);
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        this.refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
        this.refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
        this.refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
        this.refs.days.textContent = days < 10 ? `0${days}` : days;

        if (time <= 0) {
            clearInterval(this.id);
            this.refs.totalTime.innerHTML = '<p class="text">Time is over!</p>';
        }
    }
    
    timerOn = () => {
        this.id = setInterval(this.calc, 1000);
    }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
    targetDate: new Date('September 1, 2021')
});
window.addEventListener("DOMContentLoaded", timer.timerOn);


// refs = {
//     secs: document.querySelector('[data-value="secs"]'),
//     mins: document.querySelector('[data-value="mins"]'),
//     hours: document.querySelector('[data-value="hours"]'),
//     days: document.querySelector('[data-value="days"]')
// }
// let id = null;
// let targetDate = null;
        
// function calc() {
//     const currentDate = Date.now();
//     const time = (targetDate - currentDate);
//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const days = Math.floor(time / (1000 * 60 * 60 * 24));

//     refs.secs.textContent = secs < 10 ? `0${secs}` : secs;
//     refs.mins.textContent = mins < 10 ? `0${mins}` : mins;
//     refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
//     refs.days.textContent = days < 10 ? `0${days}` : days;
// }

// function timerOn() {
//     targetDate = new Date(2022,1,1,0,0);
//     id = setInterval(calc, 1000);
    
// }

// window.addEventListener("DOMContentLoaded", timerOn);