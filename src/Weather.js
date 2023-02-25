
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Weather.css';
import sun from './img/giphy.gif'
import sunAndCloud from './img/sunAndCloud.gif';
import rain from './img/rain.gif';
import falling from './img/falling.gif';
import axios from "axios";
import ButtonDrawer from './ButtonDrawer';
import WeatherToday from './WeatherToday'


function Weather(props) {
let [city, setCity] = useState(props.defaultCity);
let [weatherData, setWeatherData] = useState("...");
let [loaded, setLoaded] = useState(false);


const handleSubmit = (event) => {
    event.preventDefault();
    search();
}

const handleCityChange =(event)=> {
setCity(event.target.value)

}

const search = () =>{

const apiKey ="a7a6554f85t5e58398103479eoba472e"
let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}


function handleResponse (response)  {
      setLoaded(true);
      setWeatherData(response.data.daily);
      setCity(response.data.city);
     
}


if (loaded){ return (
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

       {weatherData[0].condition.icon== "snow-day" ||
        weatherData[0].condition.icon== "snow-night" ||
        weatherData[0].condition.icon== "shower-rain-day" ||
        weatherData[0].condition.icon== "shower-rain-night" ||
        weatherData[0].condition.icon== "rain-night" ||
        weatherData[0].condition.icon== "rain-day" ||
        weatherData[0].condition.icon== "mist-day" ||
        weatherData[0].condition.icon== "thunderstorm-day" ||
        weatherData[0].condition.icon== "thunderstorm-night" ||
        weatherData[0].condition.icon== "mist-night" 
       
       ? <img className="visualImg" src={rain}/> : 
       
       weatherData[0].condition.icon== "few-clouds-day" ||
       weatherData[0].condition.icon== "few-clouds-night" ||
       weatherData[0].condition.icon== "scattered-clouds-day" ||
       weatherData[0].condition.icon== "scattered-clouds-night"
       
       ? <img className="visualImg" src={sunAndCloud}/> :
       
       <img className="visualImg" src={sun}/> 
       
       }
    
      </div>
    </div>

    <WeatherToday data={weatherData[0]} city={city} />
    </div>
    
    </div>
    < ButtonDrawer weatherData={weatherData} className="drawerContainer"/>
    </div> 
   ); 
  } else{
      const apiKey ="a7a6554f85t5e58398103479eoba472e"
      let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
   }
}

export default Weather