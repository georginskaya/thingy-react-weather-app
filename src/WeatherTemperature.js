
import React, {useState} from 'react';
import convertCtoF from './converter';
import './WeatherTemperature.css';

export default function WeatherTemperature(props) {
const [unit, setUnit] = useState("celsius")
const [unitFeels_like, setUnitFeels_like] = useState("celsius")
const temperature = unit === "celsius" ? props.celsius: convertCtoF(props.celsius)
const feels_like = unitFeels_like === "celsius" ? props.feels_like: convertCtoF(props.feels_like)

const handleChangeToCelsius  = (event) =>{
   setUnit("celsius"); 
   event.current.target.classList('.active');
}



return (
<div className="WeatherTemperature">
 <p> {temperature} 
    <button className="unitButton"  onClick={handleChangeToCelsius}>°C</button>
    <button className="unitButton"  onClick={() => setUnit("fahrenheit")}>F°</button>
</p>

 <p>feels like: {feels_like}
    <button className="unitButton"  onClick={() => setUnitFeels_like("celsius")}>°C</button>
    <button className="unitButton"  onClick={() => setUnitFeels_like("fahrenheit")}>F°</button>
     </p>
</div> 

    )}