// https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key};

const weather_url =
  "https://api.openweathermap.org/data/2.5/weather?id=7284830&units=metric&lang=hu&appid=a3a6e8f3dd3bbd3debaa600a7e2ac7ce"; 
const secondWeather_url =
  "https://api.openweathermap.org/data/2.5/onecall?lat=47.580264&lon=19.101505&units=metric&mode=json&lang=hu&appid=a3a6e8f3dd3bbd3debaa600a7e2ac7ce";

async function getWeather() {
    const respone = await fetch(weather_url);
    const data = await respone.json();
    console.log("Adatok feldolgozasahoz:", data); 

    const respone2 = await fetch(secondWeather_url);
    const data2 = await respone2.json();






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


    let napkelte = document.querySelector(".napkelte");
    let napkelteido = new Date(data.sys.sunrise * 1000);
    napkelte.innerHTML = napkelteido.toLocaleTimeString();

    let napnyugta = document.querySelector(".napnyugta");
    let napnyugtaido = new Date(data.sys.sunset * 1000);
    napnyugta.innerHTML = napnyugtaido.toLocaleTimeString();


    let holdkelte = document.querySelector(".holdkelte");
    let holdkelteido = new Date(data2.daily[0].moonrise * 1000);
    holdkelte.innerHTML = holdkelteido.toLocaleTimeString();
    


    let holdnyugta = document.querySelector(".holdnyugta");
    let holdnyugtaido = new Date(data2.daily[0].moonset * 1000);
    holdnyugta.innerHTML = holdnyugtaido.toLocaleTimeString();
   



    if (200 <= data.weather[0].id && data.weather[0].id<=299) {
      document.querySelector(".icon").style.content = "url(thunderstrorm.png)";
    } else if (300 <= data.weather[0].id && data.weather[0].id<=399) {
      document.querySelector(".icon").style.content = "url(rainy.png)";
    } else if (500 <= data.weather[0].id && data.weather[0].id<=599) {
      document.querySelector(".icon").style.content = "url(sunny.png)";
    } else if (600 <= data.weather[0].id && data.weather[0].id<=699) {
      document.querySelector(".icon").style.content = "url(snow.png)"; 
    } else if (700 <= data.weather[0].id && data.weather[0].id<=799) {
      document.querySelector(".");
    } else if (data.weather[0].id==800) {
      document.querySelector(".icon").style.content = "url(sunny.png)";
      
    } else if (data.weather[0].id>800 && data.weather[0].id<899) {}
    

    

    

}
getWeather(); 


