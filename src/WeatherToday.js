import React from 'react';
import WeatherTemperature from './WeatherTemperature';
    
    
export default function WeatherToday (props) {
    
    return (
    <div className="col-sm weather_now_info">
    <h1>{props.city}</h1>    
     <WeatherTemperature celsius={props.data.temperature.day} /> 
      <p>{props.data.condition.description}</p>  
      <p>humidity: {props.data.temperature.humidity}%</p>  
      <p>wind speed: {props.data.wind.speed} km/h</p> 
     

    </div>)
}