const apiKey= "9cafe1b9fd9274ba781f77258c3102de"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox=document.querySelector(".search input")
const searchBtn=document.querySelector(".search button")
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response  = await fetch(apiUrl + city + `&appid=${apiKey}`)
    var data= await response.json();

    if(response.status== 404){
        document.querySelector(".error").style.display="block"
        document.querySelector(".weather").style.display="none"
    }
    else{
        

        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML=data.main.humidity + "%";
        document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";
    
        if(data.weather[0].main=="Clouds"){
            weatherIcon.src="./images/clouds.png"
            document.querySelector(".card").style.background="linear-gradient(to bottom, #bdc3c7, #2c3e50)"
        }
        else if(data.weather[0].main=="Clear"){
            weatherIcon.src="./images/clear.png"
            document.querySelector(".card").style.background="linear-gradient(to bottom, #f5af19, #f12711)"
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherIcon.src="./images/drizzle.png"
            document.querySelector(".card").style.background="linear-gradient(to bottom, #a4b0be, #d5dee7)"
        }
        else if(data.weather[0].main=="Mist"){
            weatherIcon.src="./images/mist.png"
            document.querySelector(".card").style.background="linear-gradient(to bottom, #757f9a, #d7dde8)"
        }
        else if(data.weather[0].main=="Rain"){
            weatherIcon.src="./images/rain.png"
            document.querySelector(".card").style.background="linear-gradient(to bottom, #4b79a1, #283e51)"
        }
        else if(data.weather[0].main=="Snow"){
            weatherIcon.src="./images/snow.png"
            document.querySelector(".card").style.background="linear-gradient(to bottom, #e6e9f0, #eef1f5)"
        }
        document.querySelector(".error").style.display="none"
        document.querySelector(".weather").style.display="block"
    }

    
}

searchBtn.addEventListener("click",function(){
    checkWeather(searchBox.value);
})