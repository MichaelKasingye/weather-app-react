import React, { useState } from "react";
import { api } from "../code_Library/key";
import { getWeatherIcon } from "../code_Library/weatherconditions";
import { calCelsius } from "../code_Library/functions";
import Button from "../Components/Button";

import DefaultDisplay from "../Components/DefaultDisplay";
import Weatherbody from "../Components/Weatherbody";
import Error from "../Components/Error";
import Input from "../Components/Input";
import Footer from "../Components/Footer";

import "../Style/weather.css";

function Home(props) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function search(e) {
    e.preventDefault();
    fetch(`${api.base}weather?q=${city}&appid=${api.API_key}`)
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
        // setCity("");
      })
      .catch((err) => err);
  }

  return (
    <div className="container">
      <form className="search">
        <Input
          placeholder="Search City"
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
        />
        {!city ? (
          ""
        ) : (
          <Button type="submit" disabled={!city} onClick={search} />
        )}
      </form>

      {typeof weather.main != "undefined" ? (
        <div className="">
          <Weatherbody
            city={weather.name}
            country={weather.sys.country}
            temp_celsius={calCelsius(weather.main.temp)}
            temp_max={calCelsius(weather.main.temp_max)}
            temp_min={calCelsius(weather.main.temp_min)}
            description={weather.weather[0].description}
            weatherIcon={getWeatherIcon(weather.weather[0].id)}
          />
        </div>
      ) : (
        <DefaultDisplay />
      )}
      {weather.cod === "404" ? <Error /> : <div></div>}

      <Footer
        name="Michael Kasingye"
        link="https://michaelkasingye.netlify.app/"
      />
    </div>
  );
}

export default Home;
