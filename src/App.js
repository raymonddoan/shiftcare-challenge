import { useEffect, useState } from 'react';
import './App.css';
import Calendar from './components/Calendar';
import formatAvailabilities from './utils/formatEvents';

function App() {
  const [availabilities, setAvailabilities] = useState([])

  useEffect(() => {
    fetch("./available.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => formatAvailabilities(data))
      .then((data) => setAvailabilities(data))
      // .then((data) => console.log(data))
      .catch((error) => console.log(error));
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Calendar availabilities={availabilities}/>
    </div>
  );
}

export default App;
