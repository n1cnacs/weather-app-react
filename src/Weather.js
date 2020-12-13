import React, { useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';
import "./Weather.css";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function Weather () {
const [ready, setReady] = useState(false);
    const [weatherData, setWeatherData] = useState({});

    function handleResponse (response) {
console.log(response.data);
setWeatherData ({
  temperature: response.data.main.temp,
  wind: 12,
  city: response.data.name

})
setReady(true);
   }

 if(ready) {
 return (
        <div className="row">
            <div className="col-10">
            <Form>  
                <input type="search" className="form-control" placeholder="Search for a city" />
               <div className="col-3">
                <Button className="searchButton" type="submit">Search</Button></div>
            </Form> 
                        </div>
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} />

<h1 className="text-center">Current City Name</h1>
<h2 className="text-center">Time and Date</h2> 

<Card> 
        <Card.Body>

<img src="http://openweathermap.org/img/wn/01d@2x.png" alt="Sun icon" id="weather-icon"/>
<h2 className="conditions-api text-center" id="conditions">Clear</h2>

<h2 className="text-center" id="current-temperature">
{Math.round(weatherData.temperature)}

</h2>
<h3 className="text-center">
<a href="#" className="active" id="temperature-link-c">°C </a> |
<a href="#" id="temperature-link">°F </a> </h3>

</Card.Body>
</Card>

< hr/>


<div className="row">
<div className="col-4">
<Card w-100="true">
<Card.Body>
<i className="fas fa-wind icon-format"></i>
<span>Wind</span><span className="wind conditions-format" id="wind-speed">{weatherData.wind}</span>
</Card.Body>
</Card>
</div>

<div className="col-4">
<Card w-100="true">
<Card.Body>
<i className="fas fa-temperature-high icon-format"></i>
Humidity<span className="humid conditions-format" id="humidity">15</span>
</Card.Body>
</Card>
</div>

<div className="col-4">
<Card w-100="true">
<Card.Body>
<i class="fas fa-tint icon-format"></i>
Feels like <span className="precip conditions-format" id="feels-like">10</span>
</Card.Body>
</Card>
</div>

</div>


    
     </div>
    );
 } else { const apiKey = "ab0f2c792cf3771f89c1981f17714291";
    let city = "London";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    axios.get(apiUrl).then(handleResponse);

    return "Loading...";

 }  
       
}
