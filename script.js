const options = { method: 'GET' };
var cityname="canada";
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=5c1dbd3ad978f1578fdb3f69e5b26b25`, options)
  .then(response => response.json())
  .then(response => {
    
    console.log(response);
    document.getElementById("temp_min").innerHTML = response.main.temp_min;
    document.getElementById("temp_max").innerHTML = response.main.temp_max;
    document.getElementById("temp").innerHTML = response.main.temp;
    document.getElementById("clouds").innerHTML = response.clouds.all;
    document.getElementById("speed").innerHTML = response.wind.speed;
    document.getElementById("deg").innerHTML = response.wind.deg;
    document.getElementById("sunrise").innerHTML = response.sys.sunrise;
    document.getElementById("sunset").innerHTML = response.sys.sunset;
    document.getElementById("feels_like").innerHTML = response.main.feels_like;
    document.getElementById("humidity").innerHTML = response.main.humidity;
    document.getElementById("pressure").innerHTML = response.main.pressure;
    document.getElementById("visibility").innerHTML = response.visibility;
    document.getElementById("name").innerHTML = response.name;

    document.getElementById("wicon").src = `http://openweathermap.org/img/wn/${response.weather[0].icon}@2x.png`
    
  })
  .catch(err => console.error(err)); 