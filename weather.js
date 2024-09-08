 let inputbox = document.querySelector(".input");
let searchbtn = document.querySelector(".button");
let temperature = document.querySelector(".temperature");
let city = document.querySelector(".city");
let humidity = document.querySelector(".f1");
let wind = document.querySelector(".f2");
let description1 = document.querySelector(".description1");
let description2 = document.querySelector(".description2");
 

let apikey = "19943d644c725b0ab2be76ed457fc502";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

searchbtn.addEventListener("click", async () => {
    let cityName =inputbox.value  ;
    let cn= cityName.toUpperCase();
    city.innerHTML = cn;
    await checkWeather(cn);
    inputbox.value = '';


async function checkWeather(cn) {
    const r = await fetch(`${apiUrl}${cn}&appid=${apikey}`);
    const data = await r.json();
    console.log(data);
    
    if (data.cod === 200) {  
        temperature.innerHTML = `  ${data.main.temp}°C`;
        humidity.innerHTML = `  ${data.main.humidity}%`;
        description1.innerHTML= "HUMIDITY";
        description2.innerHTML= "WIND";
        wind.innerHTML = `${data.wind.speed} m/s`;
     }
    else {
       
        city.innerHTML = "City not found!";
        temperature.innerHTML = ''; 
        city.style.color= "red";
        alert("ENTER THE CITY NAME CORRECTLY!");
        humidity.innerHTML = ` `;
        description1.innerHTML= "";
        description2.innerHTML= " ";
        wind.innerHTML = " ";
        
    }
}}); 

