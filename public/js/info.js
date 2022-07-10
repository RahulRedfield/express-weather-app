const submitBtnEl = document.getElementById("submit-btn");
const cityInputEl = document.getElementById("city-input");
const weatherEl = document.getElementById("weather");
const errPEl = document.getElementById("error-text");

const degEl = document.getElementById("deg");
const conditionEl = document.getElementById("condition");
const locationEl = document.getElementById("location");
const iconEl = document.getElementById("weather-icon");

const dayEl = document.getElementById("day");
const timeEl = document.getElementById("time");

const setDay = () => {
    const date = new Date();

    const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thurday",
        "Friday",
        "Saturday",
    ]

    const today = days[date.getDay()];
    let hours = date.getHours();
    let minutes = date.getMinutes();

    if (hours < 10) {
        hours = `0${hours}`;
    }

    if (minutes < 10) {
        minutes = `0${minutes}`;
    }

    console.log(today, hours, minutes);

    dayEl.innerHTML = today;
    timeEl.innerHTML = `${hours > 12 ? hours - 12 : hours}:${minutes} <span class="meridies">${hours < 12 ? "am" : "pm"}</span>`;


}

setDay()

const getWeatherInfo = async (e) => {
    e.preventDefault();
    const cityName = cityInputEl.value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0ef0928a864cf8fbdcf0df02d6d7d49d&units=metric`;

    if (cityName === "") {
        weatherEl.classList.add("hide");
        errPEl.classList.remove("hide");
    }
    else {
        try {
            const res = await fetch(url);
            const weatherData = await res.json();
            console.log(weatherData);
            if (weatherData.cod === "404") {
                weatherEl.classList.add("hide");
                errPEl.classList.remove("hide");
            } else {
                weatherEl.classList.remove("hide");
                errPEl.classList.add("hide");

                degEl.innerHTML = weatherData.main.temp + "°<span class='cel'>C</span>";
                conditionEl.innerHTML = weatherData.weather[0].main;
                locationEl.innerHTML = `${weatherData.name}, ${weatherData.sys.country}`
                iconEl.setAttribute("src", `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`);
                setDay();
            }
        } catch (err) {
            console.log(err)
        }

    }
}

submitBtnEl.addEventListener("click", getWeatherInfo);
