import logo from "./logo.svg";
import "./App.css";
import { WeatherApp } from "./WeatherApp/WeatherApp";
import TaskManager from "./TaskManager/Taskmanager";
import { useState } from "react";

function App() {
  const [task, setTask] = useState(false);
  const [weather, setWeather] = useState(false);
  const toggleTask = () => {
    setTask(true);
    setWeather(false);
  };
  const toggleWether = () => {
    setTask(false);
    setWeather(true);
  };

  return (
    <div className="App">
      <div className="containerButton">
        {" "}
        <button onClick={toggleTask}>Task App</button>
        <button onClick={toggleWether}>Weather App</button>
      </div>
      {weather ? <WeatherApp /> : ""}
      {task ? <TaskManager /> : ""}
    </div>
  );
}

export default App;
