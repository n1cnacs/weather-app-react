import React from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';
import "./Weather.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



//


export default function Weather () {
    function handleResponse (response) {
       // alert(`The weather in New York is ${response.data.main.temp} `);
    }

    let apiKey = "ab0f2c792cf3771f89c1981f17714291";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`

    axios.get(apiUrl).then(handleResponse);
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
    
     </div>
    )
}
