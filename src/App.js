import { useEffect, useState } from "react";
import "./App.css";
import Container from "./components/atoms/Container";
import Calendar from "./components/molecules/Calendar";
import Sidebar from "./components/molecules/Sidebar";
import formatAvailabilities from "./utils/formatEvents";

function App() {
  const [availabilities, setAvailabilities] = useState([]);
  const [coaches, setCoaches] = useState([]);
  const [selectedCoach, setSelectedCoach] = useState(null);

  const getAvailabilties = () => {
    fetch("./available.json", {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => formatAvailabilities(data))
      .then((data) => setAvailabilities(data))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getAvailabilties();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        Welcome to Ray's Shiftcare Calendar
      </header>
      <Container>
        <Sidebar
          availabilities={availabilities}
          coaches={coaches}
          setCoaches={setCoaches}
          setSelectedCoach={setSelectedCoach}
        />
        {availabilities && (
          <Calendar
            availabilities={availabilities}
            selectedCoach={selectedCoach}
          />
        )}
      </Container>
    </div>
  );
}

export default App;
