import React from "react";
import Loader from 'react-loader-spinner';
import FormattedDate from "./FormattedDate";



export default function WeatherInfo (props) {
    return (<div className="WeatherInfo">
        <div className="weather-app">
            <h1 className="heading text-center">{props.data.city}</h1> 
<FormattedDate date={props.data.date} />
                        </div>
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} />



 

<div className="card">
    <div className="card-body text-center">
<img src={props.data.iconUrl} alt={props.data.description} id="weather-icon"/>
<h2 className="conditions-api text-center text-capitalize" id="conditions">{props.data.description}</h2>

<h2 className="text-center" id="current-temperature">
{Math.round(props.data.temperature)}

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
<span>Wind</span><span className="wind conditions-format" id="wind-speed"> {Math.round(props.data.wind)} km/h</span>
</div>
</div>
</div>

<div className="col-4">
<div className="card">
    <div className="card-body text-center">
<i className="fas fa-temperature-high icon-format"></i>
Humidity<span className="humid conditions-format" id="humidity">{props.data.humidity} %</span>
</div>
</div>
</div>

<div className="col-4">
    <div className="card">
        <div className="card-body text-center">

<i class="fas fa-tint icon-format"></i>
Feels like <span className="precip conditions-format" id="feels-like">{Math.round(props.data.feels)}</span>

</div>
</div>
</div>
</div>
    </div>
    );
}

