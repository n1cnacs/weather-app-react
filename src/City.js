import React from "react";
import Card from 'react-bootstrap/Card';


export default function currentCity() {
    return (
    <Card> 
        <Card.Body>

<img src="http://openweathermap.org/img/wn/01d@2x.png" alt="Sun icon" id="weather-icon"/>
<h2 class="conditions-api text-center" id="conditions">Clear</h2>

<h2 class="text-center" id="current-temperature">
18

</h2>
<h3 class="text-center">
<a href="#" class="active" id="temperature-link-c">°C </a> |
<a href="#" id="temperature-link">°F </a> </h3>

</Card.Body>
</Card>

    )
}