const btnStart = document.querySelector('#btnStart');
const btnReset = document.querySelector('#btnReset');
const btnPause = document.querySelector('#btnPause');
const timerP = document.querySelector('#timerContainer p');

let seconds = 0, minutes = 0, hours = 0;
let hour = 0, minute = 0, second = 0;

let timerStart;

let started = false;

btnStart.addEventListener('click', () =>
{
    timerP.style.color = 'black';
    timerP.style.transition = '200ms'
    if (started == false)
    {
        timerStart = setInterval(() =>
        {
            seconds++;
            if (seconds == 60)
            {
                seconds = 0;
                minutes++;
            }

            if (minutes == 60)
            {
                minutes = 0;
                hours++;
            }

            timerP.innerHTML = `${hours < 10 ? '0' + hours : hours}h ${minutes < 10 ? '0' + minutes : minutes}m ${seconds < 10 ? '0' + seconds : seconds}s `;
        }, 1000);
        started = true;
    }

})

btnPause.addEventListener('click', () =>
{
    timerP.style.color = 'red';
    timerP.style.transition = '200ms'
    clearInterval(timerStart);
    started = false;
})

btnReset.addEventListener('click', () =>
{
    timerP.style.color = 'black';
    timerP.style.transition = '200ms'
    seconds = 0;
    minutes = 0;
    hours = 0;
    timerP.innerHTML = `00h 00m 00s `;
})