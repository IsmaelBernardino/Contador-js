const divDays = document.querySelector('.day');
const divHours = document.querySelector('.hour');
const divMin = document.querySelector('.min');
const divSec = document.querySelector('.sec');

function countdown() {
    const date = new Date();
    const nextYear = date.getYear() + 1901;
    const datenextyear = '01 Jan ' + nextYear;
    // date of next new year
    const newYear = new Date(datenextyear);

    const totalSec = (newYear - date) / 1000;

    const days = Math.floor(totalSec / 3600 / 24);
    const hours = Math.floor(totalSec / 3600) % 24;
    const min = Math.floor(totalSec / 60) % 60;
    const sec = Math.floor (totalSec) % 60;

    // insert into html
    divDays.innerHTML = days
    divHours.innerHTML = hours
    divMin.innerHTML = min
    divSec.innerHTML = sec
}

countdown()

setInterval(countdown, 1000)