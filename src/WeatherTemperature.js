import React, { useState } from "react";

export default function WeatherTemperature (props) {
    const [unit, setUnit] = useState ("celcius")
    if(unit === 'celcius') {
       return (
        <div className="WeatherTemperature">
<span className="active" id="temperature-link-c">°C | <a href="/">°F</a> </span> 
    </div>
    );
    } else {
        return "f"
    }
    

}