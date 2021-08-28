// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key};

const weather_url =
  "https://api.openweathermap.org/data/2.5/weather?id=7284830&units=metric&lang=hu&appid=a3a6e8f3dd3bbd3debaa600a7e2ac7ce"; 

async function getWeather() {
    const respone = await fetch(weather_url);
    const data = await respone.json();
    console.log("Adatok feldolgozasahoz:", data); 

    let city_name = document.querySelector(".city");
    city_name.innerHTML = data.name;

    let homerseklet = document.querySelector(".temperature");
    homerseklet.innerHTML = Math.round(data.main.temp -0) + " °C ";

    let weather = document.querySelector(".weathertext");
    let text = data.weather[0].description[0].toUpperCase();
    weather.innerHTML = text + data.weather[0].description.slice(1); 
 
    let tempmin = document.querySelector(".tempmin");
    tempmin.innerHTML = Math.round(data.main.temp_min) + " °C ";


    let tempmax = document.querySelector(".tempmax");
    tempmax.innerHTML = Math.round(data.main.temp_max) + " °C ";


    let humidity = document.querySelector(".humidity");
    humidity.innerHTML = data.main.humidity + " %";


    let pressure = document.querySelector(".pressure");
    pressure.innerHTML = data.main.pressure + " hPh";



}
getWeather(); 


