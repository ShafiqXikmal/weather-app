const React = require("react");
const { useState } = require("react");
const Weather = require("./weather");
const Style = require("./style.css");

function App() {
  const [descriptionS, setDescription] = useState("");
  const [temperatue, setTemperatue] = useState("");
  const [location, setLocation] = useState("");

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
        <h1> {location}</h1>
        <h1>Weather </h1>
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
        <h1> {descriptionS}</h1>
        <h1> {temperatue}</h1>
      </div>
    </>
  );
}

module.exports = App;
