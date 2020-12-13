import Weather from "./Weather";
import Card from 'react-bootstrap/Card';

import './App.css';

function App() {
  return (
      <div className="App">
        <div className="container">
      <header className="App-header">
                   
               <Card> 
                <Card.Body>
     < Weather />
   </Card.Body>
</Card>
<h1 className="text-center">Current City Name</h1>
<h2 className="text-center">Time and Date</h2>
<Card> 
                <Card.Body>
    Placeholder
    <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="Sun icon" id="weather-icon"/>

   </Card.Body>
</Card>


<Card> 
                <Card.Body>
    Placeholder Images Boxes
   </Card.Body>
</Card>


               
           <h3><a rel="noreferrer"href="https://github.com/n1cnacs/weather-app-react.git" target="_blank">Open Source</a> coded by Nicola Warner.</h3>
            

        </header></div></div>
    );
}

export default App;
