const dates = new Date();
let day = dates.getDay();
let date = dates.getDate();
let year = dates.getFullYear();
day = day == 0 ? 6 : day;

setTimeout(() => {
    // day
    const day7 = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    const dayElement = document.getElementById('day');
    dayElement.innerText = `${day7[day - 1]}`;
    
    // date
    const dateElement = document.getElementById('date');
    dateElement.innerText = date;
    
    // year
    const yearElement = document.getElementById('year');
    yearElement.innerText = year;
}, 1000);




setTimeout(()=> {
    setInterval(() => {
        const date = new Date();
        const milisecond = String(date.getMilliseconds()).padStart(2, '0');
            
        const text = document.getElementById('millisecond');
        const result = text.innerText = milisecond;
        return result;
    }, 1);
}, 1000);

setInterval(() => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');

    const formated = `${hours} : ${minutes} : ${second}`;

    const text = document.getElementById('time');
    const result = text.innerText = formated;

    return result;

}, 1000);