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





setInterval(() => {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    const second = String(date.getSeconds()).padStart(2, '0');
    
    const formated = `${hours} : ${minutes} : ${second} `;
    
    const text = document.getElementById('time');
    const result = text.innerText = formated;
    
    return result;
    
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

setTimeout(() => {
    if(navigator.geolocation) {
        function getData() {
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    const messegeElement = document.getElementById('messege');
                    const tempElement = document.getElementById('temp');
                    const icon = document.getElementById('icon');
                    const cityElement = document.getElementById('city');
                    const lat = position.coords.latitude;
                    const lot = position.coords.longitude;
                    const key = 'd67d60faba6f78becf87f31a5efd9ad0';
    
                    const BASE_URL =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lot}&appid=${key}&units=metric`
                    
                    fetch(BASE_URL)
                    .then(response => response.json())
                    .then(data => {
                        let weather = data.weather[0].main
                        let temp = data.main.temp;
                        let iconCode = data.weather[0].icon;
                        let formatIcon = `https://openweathermap.org/img/wn/${iconCode}.png`;
                        messegeElement.innerText = weather;
                        icon.src = formatIcon;
                        tempElement.innerText = `${temp.toFixed(0)}°C`;
                        cityElement.innerText = data.name;
                    })
                    .catch(err => {
                        messegeElement.innerText = `Gagal mengambil data cuaca`;
                    });
    
                },
                function (error) {
                    const messegeElement = document.getElementById('messege');
                    messegeElement.innerText = `Gagal mendapatkan data cuaca.`;
                    setTimeout(() => {
                        messegeElement.innerText = '';
                    }, 2000);
                }
            )
        }
    }else {
        const messegeElement = document.getElementById('messege');
        messegeElement.innerText = `Browser tidak mendukung Geolocation`;
    }

    getData();
    setInterval(getData, 300000);

}, 1000);


console.log(
`⚡
⚡⚡
⚡⚡⚡
Welcome to my website bro 🙂‍↕️
Thank you for visiting my website 😁
✦
Let's connect with each other on linkedin:
https://www.linkedin.com/in/muhammad-nur-rizky/
Don't forget to also follow my github:
https://github.com/Nurrizzky
✦
Have a nice day 😉
⚡⚡⚡
⚡⚡
⚡
`);