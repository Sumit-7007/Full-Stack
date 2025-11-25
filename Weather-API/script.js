let inputBox = document.getElementById("inp");
let button = document.getElementById("btn");

async function getWeather(){
    let city = inputBox.value;

    let response = await fetch("https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=en&format=json");
    let geoData = await response.json();


    let {latitude, longitude} = geoData.results[0];

    let response1 = await fetch("https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m&current");
    let weatherData = await response1.json();

    for(let idx in weatherData.hourly.time){
        let ti = document.createElement('h1')
        ti.innertext = time[idx];
        

        let temp = document.createElement('h2')
        ti.innertext = time[idx];

    }


}

button.addEventListener("click", getWeather);