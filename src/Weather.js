import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import axios from "axios";
import Loader from 'react-loader-spinner';
import "./Weather.css";

export default function Weather (props) {
const [ready, setReady] = useState(false);
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
  iconUrl:"http://openweathermap.org/img/wn/01d@2x.png"

})
setReady(true);
   }

 if(ready) {
 return (
     <div className="Weather">
              <div className="row">
            <div className="col-10">
            <form>
                <input type="search" className="form-control" placeholder="Search for a city" />
               <div className="col-3">
               <button className="searchButton" type="submit">Search</button></div>
            </form> 
            <h1 className="heading text-center">Current City Name</h1> 
<FormattedDate date={weatherData.date} />
                        </div>
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} />



 

<div className="card">
    <div className="card-body text-center">
<img src={weatherData.iconUrl} alt={weatherData.description} id="weather-icon"/>
<h2 className="conditions-api text-center text-capitalize" id="conditions">{weatherData.description}</h2>

<h2 className="text-center" id="current-temperature">
{Math.round(weatherData.temperature)}

</h2>
<h3 className="text-center">
<a href="#" className="active" id="temperature-link-c">°C </a> |
<a href="#" id="temperature-link">°F </a> </h3>


</div>
</div>

< hr/>


<div className="row">
<div className="col-4">
    <div className="card">
        <div className="card-body text-center">
<i className="fas fa-wind icon-format"></i>
<span>Wind</span><span className="wind conditions-format" id="wind-speed"> {Math.round(weatherData.wind)} km/h</span>
</div>
</div>
</div>

<div className="col-4">
<div className="card">
    <div className="card-body text-center">
<i className="fas fa-temperature-high icon-format"></i>
Humidity<span className="humid conditions-format" id="humidity">{weatherData.humidity} %</span>
</div>
</div>
</div>

<div className="col-4">
    <div className="card">
        <div className="card-body text-center">

<i class="fas fa-tint icon-format"></i>
Feels like <span className="precip conditions-format" id="feels-like">{Math.round(weatherData.feels)}</span>

</div>
</div>
</div>
</div>


    </div>
        </div>
    );
 } else { const apiKey = "ab0f2c792cf3771f89c1981f17714291";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";

 }  
       
}
