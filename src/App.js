import logo from "./logo.svg";
import "./App.css";
import { WeatherApp } from "./WeatherApp/WeatherApp";
import TaskManager from "./TaskManager/Taskmanager";
import { useState } from "react";
import { ImageCard } from "./MyImageCard/ImageCard";

function App() {
  const [task, setTask] = useState(false);
  const [weather, setWeather] = useState(false);
  const [image,setImage]=useState(false)
  const toggleTask = () => {
    setTask(true);
    setWeather(false);
  };
  const toggleWether = () => {
    setTask(false);
    setWeather(true);
  };
  const toggleImage = () => {
    setTask(false);
    setWeather(false);
    setImage(true)
  };

  return (
    <div className="App">
      <div className="containerButton">
        {" "}
        <button onClick={toggleTask}>Task App</button>
        <button onClick={toggleWether}>Weather App</button>
        <button onClick={toggleImage}>Image Card</button>
      </div>
      {weather ? <WeatherApp /> : ""}
      {task ? <TaskManager /> : ""}
      {image?<ImageCard/>:''}
    </div>
  );
}

export default App;
