import Weather from "./Weather";
import Card from 'react-bootstrap/Card';

import './App.css';

function App() {
  return (
      <div className="App">
        <div className="container">
      <header className="App-header">
                   
              
     < Weather />
  
<h1 className="text-center">Current City Name</h1>
<h2 className="text-center">Time and Date</h2>
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

< hr/>


<div className="row">
<div className="col-4">
<Card w-100>
<Card.Body>
Test
<span>Wind</span><span className="wind conditions-format" id="wind-speed">10</span>
</Card.Body>
</Card>
</div>

<div className="col-4">
<Card w-100>
<Card.Body>
Test
Humidity<span className="humid conditions-format" id="humidity">15</span>
</Card.Body>
</Card>
</div>

<div className="col-4">
<Card w-100>
<Card.Body>
Test
Feels like <span className="precip conditions-format" id="feels-like">10</span>
</Card.Body>
</Card>
</div>

</div>




               
           <h3><a rel="noreferrer"href="https://github.com/n1cnacs/weather-app-react.git" target="_blank">Open Source</a> coded by Nicola Warner.</h3>
            

        </header>
        </div>
        </div>
    );
}

export default App;
