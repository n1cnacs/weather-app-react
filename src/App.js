import Weather from "./Weather";
import Card from 'react-bootstrap/Card';

import './App.css';

function App() {
  return (
      <div className="App">
      <header className="App-header">
       
              
               <Card> <h1>
        Weather App        
        </h1>
  <Card.Body> 
    < Weather />
    </Card.Body>
</Card>
               
           <h3><a rel="noreferrer"href="https://github.com/n1cnacs/weather-app-react.git" target="_blank">Open Source</a> coded by Nicola Warner.</h3>
            

        </header></div>
    );
}

export default App;
