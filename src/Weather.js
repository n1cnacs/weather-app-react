import React from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';

//


export default function Weather () {
    function handleResponse (response) {
        alert(`The weather in New York is ${response.data.main.temp} `);
    }

    let apiKey = "ab0f2c792cf3771f89c1981f17714291";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);
    return (
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} 

     />
    )
}
