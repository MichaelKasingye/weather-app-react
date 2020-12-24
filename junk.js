import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import{BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Form from './Components/SingleComponents/Form'

import Admin from './Components/Pages/Admin';
import Weather from './Components/Pages/Weather';

// used : https://openweathermap.org/current


const api= {
    API_key: "ee4d77978072ee83e075c3562ba9eae4",
    base:"http://api.openweathermap.org/data/2.5/"
};

class App extends Component{

constructor(){
  super();
  this.state = {
    city: undefined,
    country: undefined, 
    icon: undefined, 
    main: undefined, 
    celsius: undefined, 
    temp_max: undefined, 
    temp_min: undefined, 
    description:"",
    error: false 
  };
  // this.getWeather();

  this.weatherIcon = {
    Thunderstorm: "Thunderstorm",
    Drizzle: "Drizzle",
    Rain: "Rain",
    Snow: "Snow",
    Atmosphere: "Atmosphere",
    Clear: "clear",
    Clouds: "Clouds",
  }
}



getWeatherIcon(icons, rangeId){
switch (true) {
  case rangeId >= 200 && rangeId <= 232:
    this.setState({icon:this.weatherIcon.Thunderstorm})
    break;
    case rangeId >= 300 && rangeId <= 321:
      this.setState({icon:this.weatherIcon.Drizzle})
      break;
      case rangeId >= 500 && rangeId <= 531:
    this.setState({icon:this.weatherIcon.Rain})
    break;
    case rangeId >= 600 && rangeId <= 232:
    this.setState({icon:this.weatherIcon.Snow})
    break;
    case rangeId >= 701 && rangeId <= 720:
    this.setState({icon:this.weatherIcon.Atmosphere})
    break;
    case rangeId === 800:
    this.setState({icon:this.weatherIcon.Clear})
    break;
    case rangeId >= 801 && rangeId <= 804:
    this.setState({icon:this.weatherIcon.Clouds})
    break;
  default:
    this.setState({icon:this.weatherIcon.Clouds})
}
}

getWeather = async (e) =>{
  // e.preventDefault();
const city = e.target.elements.city.value;
const country = e.target.elements.country.value;
console.log(city,country);

if(city && country){
  const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_key}`);
  const response = await api_call.json();
  console.log(response);

  this.setState({
    city: `${response.name},${response.sys.country}`,
    // main: undefined, 
    celsius: this.calCelsius(response.main.temp), 
    temp_max: this.calCelsius(response.main.temp_max), 
    temp_min: this.calCelsius(response.main.temp_min), 
    description:response.weather[0].description,
  })
this.getWeatherIcon(this.weatherIcon,response.weather[0].id)
}else{
  this.setState({error : true})
}
}

render(){
  return (
    <Router>
    <div className="App">
       <Switch>
         <Route path="/admin"><Admin/></Route>
         <Route path="/">
            <Form loadWeather={this.getWeather}
            error={this.state.error}
            />
           <Weather 
         city={this.state.city}
          country={this.state.country}
          temp_celsius={this.state.celsius}
          temp_max={this.state.temp_max}
          temp_min={this.state.temp_min} 
          description={this.state.description}
          weatherIcon={this.state.icon}
          /></Route>
       </Switch>
    </div>
    </Router>
      );
}
}


export default App;


<h1>{props.location}</h1>
            {/* <WbSunnyIcon/> */}
            <h2 className="weather_condition">
                {props.weatherIcon}
            </h2>
            {props.temp_celsius ?(
                <h2>{props.temp_celsius}&deg;</h2>
            ): null}
            {/* show temp */}
            {mimmaxTemp(props.temp_min,props.temp_max)}
            <h3>{props.description}</h3>


<div className="container">
          <h1>
            {weather.name},{weather.sys.country}
          </h1>
          {/* <WbSunnyIcon/> */}
          <h2 className="weather_condition">{weather.weatherIcon}</h2>
          {weather.main.temp ? <h2>{weather.main.temp}&deg;</h2> : null}
          {/* show temp */}
          {weather.main.temp_min},{weather.main.temp_max}
          <h3>{weather.weather[0].description}</h3>
        </div>


