
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './WeatherNow.css';
import sun from './img/giphy.gif'
import axios from "axios";
import WeatherTemperature from './WeatherTemperature';


function WeatherNow(props) {
const [city, setCity] = useState(props.defaultCity);
const [weatherData, setWeatherData] = useState("...")



const handleSubmit = (event) => {
    event.preventDefault();
    search();
}

const handleCityChange =(event)=> {
setCity(event.target.value)

}

const search = () =>{
const apiKey ="a7a6554f85t5e58398103479eoba472e"
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

function handleResponse  (response)  {
    setWeatherData({
        city: response.data.city,
        temperature: Math.round(response.data.temperature.current),
        feels_like:Math.round(response.data.temperature.feels_like),
        humidity: response.data.temperature.humidity,
        wind_speed: response.data.wind.speed,
        description: response.data.condition.description
        

    });

}

return (
<div>
<div className="container">
  <div className="row">
   <div className="col-sm">
       <form onSubmit={handleSubmit}>
        <div className="search_field">
         <input className="searchBox" type="text" placeholder="Enter a city" 
           onChange={handleCityChange}/>📍

         </div>
        </form>
    </div>
    </div>
    <div className="row">
     <div className="col-sm">
      <div className="visual">
     <img classNmae="visualImg"src={sun}/>
      </div>
    </div>


    <div className="col-sm weather_now_info">
      <h1>{weatherData.city}</h1>   
      <WeatherTemperature celsius={weatherData.temperature} feels_like={weatherData.feels_like}/> 
      <p>{weatherData.description}</p>  
      <p>humidity: {weatherData.humidity}%</p>  
      <p>wind speed: {weatherData.wind_speed} km/h</p> 

    </div>
  </div>
    
    </div>
    </div>
   
  )
}

export default WeatherNow