import React from "react";
import './DrawerContent.css';
import ForecastLayout from "./ForecastLayout";


function DrawerContent(props) {

  
  return (
    <div className="container drawer-content">
  <div className="row">
      <h1 className="weekly_forecast">Weekly Forecast</h1></div>
    <div className="row">
      {props.weatherData.map(function(dailyForecast,index){ 
        if (index >0 && index < 6){
        return(
          <div className="col" key={index}>
            <ForecastLayout data={dailyForecast} />
            </div>
        )}
      }
      )} </div>
    </div>
  );
}

export default DrawerContent;
