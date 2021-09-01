import { useCallback, useEffect, useState } from "react";
import "./App.css";
import Calendar from "./components/Calendar";
import Sidebar from "./components/Sidebar";
import formatAvailabilities from "./utils/formatEvents";

function App() {
  const [availabilities, setAvailabilities] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [selectedCoach, setSelectedCoach] = useState(null)

  const getAvailabilties = () => {
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
  };

  const getCoaches = useCallback(() => {
    let coachesArray = [];
    availabilities.forEach((availability) => {
      if (!coachesArray.includes(availability.extendedProps.name)) {
        coachesArray.push(availability.extendedProps.name);
      }
    });
    setCoaches(coachesArray);
  }, [availabilities]);

  useEffect(() => {
    getAvailabilties();
    getCoaches();
  }, [getCoaches]);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      <Sidebar coaches={coaches} setSelectedCoach={setSelectedCoach} />
      {availabilities && <Calendar availabilities={availabilities} selectedCoach={selectedCoach} />}
    </div>
  );
}

export default App;
