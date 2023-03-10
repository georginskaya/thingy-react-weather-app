
import React, {useState} from 'react';
import convertCtoF from './converter';
import './WeatherTemperature.css';

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius")
let temperature = unit === "celsius" ? props.celsius: convertCtoF(props.celsius);
 temperature = Math.round(temperature);

let buttonCelsius = document.querySelector('.buttonC')
let buttonFahrenheit = document.querySelector('.buttonF')


const handleChangeToCelsius  = (event) =>{
   setUnit("celsius")
   event.target.classList.toggle('active');
   buttonFahrenheit.classList.remove('active');
 
}
const handleChangeToFahrenheit  = (event) =>{
   setUnit("fahrenheit")
   event.target.classList.toggle('active');
   buttonCelsius.classList.remove('active');
}




return (
<div className="WeatherTemperature">
 <p> {temperature} 
    <button className="unitButton buttonC"  onClick={handleChangeToCelsius}>°C</button>
    <button className="unitButton buttonF"  onClick={handleChangeToFahrenheit}>F°</button>
</p>

</div> 

    )}