
import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Weather.css';
import sun from './img/giphy.gif'
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
      console.log(weatherData);
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
     <img classNmae="visualImg"src={sun}/>
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