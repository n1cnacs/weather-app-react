import Weather from "./Weather";
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="App-header">
        <h1>
        Weather App        
        </h1>
        <div className="Card App-body">
      <div className="Card-body">
        < Weather />
        </div>
        </div>
      <h3>Open Source coded by Nicola Warner</h3>
        
        </header>
    </div>
  );
}

export default App;
