import './style.css';
import weather from "./info";


const weather_location = document.getElementById("weather_location");
const temp_c = document.getElementById("temp_c");
const temp_f = document.getElementById("temp_f");
const feelsLike = document.getElementById("feelsLike");
const speed = document.getElementById("windSpeed");
const button = document.querySelector("#searchButton");

button.addEventListener("click",() =>{
    const locate = document.getElementById("getlocation").value;
    showData(locate);
})

async function showData(locations){
    const info = await weather(locations);
    console.log(info);
    weather_location.innerText =   `Location: ${info.location.name}`;
    temp_c.innerText = `Temperature (Celsisus): ${info.current.temp_c}C`;
    temp_f.innerText = `Temperature (fahrenheit): ${info.current.temp_f}F`
    feelsLike.innerText = `Feels like ${info.current.feelslike_c}C`;
    speed.innerText = `Wind Speed: ${info.current.wind_kph} kph`;

}

