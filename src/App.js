import Weather from "./Weather";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import './App.css';

function App() {
  return (
      <header className="App-header">
        <h1>
        Weather App        
        </h1>
               < Weather />
           
               
           <h3><a href="https://github.com/n1cnacs/weather-app-react.git" target="_blank">Open Source</a> coded by Nicola Warner</h3>
            

        </header>
    );
}

export default App;
