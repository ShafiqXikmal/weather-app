const React = require("react");
const { useState } = require("react");
const Weather = require("./weather");
const Style = require("./style.css");

function App() {
  const [descriptionS, setDescription] = useState("");
  const [temperatue, setTemperatue] = useState("");
  const [location, setLocation] = useState("");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");

  function getWeatherData() {
    let apiKey = "7dfe309afec3ee637c6130947b96f76b";
    let baseURL = `https://api.openweathermap.org/data/2.5/weather`;
    let queryString = `?q=${location}&appid=${apiKey}&units=metric`;
    let url = baseURL + queryString;

    fetch(url, {
      method: "GET",
    })
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        setDescription(data.weather[0].description);
        setTemperatue(data.main.temp);
        setLocation(data.name);
        setHumidity(data.main.humidity);
        setWind(data.wind.speed);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  function handleChange(event) {
    setLocation(event.target.value);
  }

  return (
    <>
      <div>
        <h1>Weather App Project</h1>
      </div>
      <div>
        <div className="container">
          <form>
            <input
              type="text"
              placeholder="Your Location"
              value={location}
              onChange={handleChange}
            ></input>
          </form>
          <button onClick={getWeatherData}>Search</button>
        </div>
        <h1> Temperatue: {temperatue} °C</h1>
        <h1> Description: {descriptionS}</h1>
        <h1> Humidity: {humidity} % </h1>
        <h1> Wind Speed: {wind} Km/H</h1>
      </div>
    </>
  );
}

module.exports = App;
