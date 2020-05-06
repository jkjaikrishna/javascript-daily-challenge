const hourHand = document.getElementById('hourHand');
const minuteHand = document.getElementById('minuteHand');
const secondHand = document.getElementById('secondHand');

function initClock() {
    let date = new Date();
    let hours = date.getHours() % 12;
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    console.log(hours, minutes, seconds);
    let hourDeg = hours * 30,
        minuteDeg = minutes * 6;
        secondDeg = seconds * 6;

        hourHand.style.transform = `rotate(${hourDeg}deg)`;
        minuteHand.style.transform = `rotate(${minuteDeg}deg)`;
        secondHand.style.transform = `rotate(${secondDeg}deg)`;

        setTimeout(initClock, 1000);
}

initClock();