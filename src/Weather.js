import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather (props) {
const [ready, setReady] = useState(false);
const [city, setCity] = useState(props.defaultCity);
    const [weatherData, setWeatherData] = useState({});

    function handleResponse (response) {
console.log(response.data);
setWeatherData ({
     
  temperature: response.data.main.temp,
  wind: response.data.wind.speed,
  humidity: response.data.main.humidity,
  date: new Date(response.data.dt * 1000),
  feels: response.data.main.feels_like,
  city: response.data.name,
  description: response.data.weather[0].description,
  iconUrl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`

})
setReady(true);
   }

   function search() {
    const apiKey = "ab0f2c792cf3771f89c1981f17714291";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);
   }

   function handleSubmit (event) {
       event.preventDefault ();
search();  
}

   function handleCityChange(event) {
setCity(event.target.value);

   }

 if(ready) {
 return (
     <div className="Weather">
              <div className="row">
            <div className="col-10">
            <form onSubmit={handleSubmit}>
                <input type="search" 
                className="form-control" 
                autofocus="on"
                placeholder="Search for a city"
                onChange={handleCityChange} />
               <div className="col-3">
               <button className="searchButton" type="submit">Search</button></div>
            </form> 

            <WeatherInfo data={weatherData}/>
            
</div>


    </div>
        </div>
    );
 } else { 
search();
return "Loading...";

 }  
       
}
