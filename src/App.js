import Weather from "./Weather";
import City from "./City.js";
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

     < City />
     
< hr/>


<div className="row">
<div className="col-4">
<Card w-100>
<Card.Body>
<i className="fas fa-wind icon-format"></i>
<span>Wind</span><span className="wind conditions-format" id="wind-speed">10</span>
</Card.Body>
</Card>
</div>

<div className="col-4">
<Card w-100>
<Card.Body>
<i className="fas fa-temperature-high icon-format"></i>
Humidity<span className="humid conditions-format" id="humidity">15</span>
</Card.Body>
</Card>
</div>

<div className="col-4">
<Card w-100>
<Card.Body>
<i class="fas fa-tint icon-format"></i>
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
