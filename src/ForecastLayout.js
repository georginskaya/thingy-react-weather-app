import React from "react"; 
import "./DrawerContent.css";






function ForecastLayout(props) {

let newDate = new Date(props.data.time * 1000)
let date_raw = newDate.getDate();
let month_raw = newDate.getMonth() + 1;
let temp = Math.round(props.data.temperature.day);

  
  return (
  <div className="forecast">
    <div className="forecast_item">
         
        <div className="col">
      
        {date_raw}/{month_raw}
         <p><img src={props.data.condition.icon_url} /></p>
        {temp}°
       
    </div>
        </div>
         </div>
  
 
  );
}

export default ForecastLayout;
