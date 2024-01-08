let apikey = "b7dfd32d25bfb7e97d5f0478fcfba116";
let apiurl ="https://api.openweathermap.org/data/2.5/weather?";
let city;
let userCity = document.getElementById('userText');
let temperature = document.getElementById("temp");
let ct = document.getElementById("city");
let humidity = document.getElementById("humidity-info");
let windInfo= document.getElementById("wind-info");
let weatherImage = document.querySelector(".weather_img");

async function getWeatherData(){
    if(userCity.value==""){
        alert("ENTER A CITY NAME")
    }
    else{
        city = userCity.value;
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}`);
        let data = await response.json();
        ct.innerHTML=data.name;
        temperature.innerHTML= Math.round(data.main.temp - 273.15)+"°C";
        humidity.innerHTML = data.main.humidity+"%";
        windInfo.innerHTML=data.wind.speed+"km/h";
        userCity.value="";
        if(data.weather[0].main=="Clear"){
            weatherImage.src="https://static.vecteezy.com/system/resources/previews/023/404/599/original/sunny-cloudy-icon-illustration-in-3d-style-glowing-cloudy-sunny-illustration-design-free-png.png";
        }
        else if(data.weather[0].main=="Snow"){
            weatherImage.src="https://www.vhv.rs/dpng/d/0-6288_snow-weather-icon-gif-hd-png-download.png";
        }
        else if(data.weather[0].main=="Clouds"){
            weatherImage.src="https://cdn-icons-png.flaticon.com/512/4834/4834559.png";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherImage.src="https://cdn3d.iconscout.com/3d/premium/thumb/drizzle-weather-7096832-5753008.png";
        }
        else if(data.weather[0].main=="Mist"){
            weatherImage.src="https://cdn-icons-png.flaticon.com/512/1197/1197102.png";
        }
        else if(data.weather[0].main=="Rain"){
            weatherImage.src="https://static.vecteezy.com/system/resources/thumbnails/008/854/791/small/thunderstorm-rain-icon-weather-forecast-meteorological-sign-3d-render-png.png";
        }
        console.log(data)
    }
}