
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';



function Header() {
let newDate = new Date()
let date_raw = newDate.getDate();
let month_raw = newDate.getMonth() + 1;
let year = newDate.getFullYear();
let date
let month
if (date_raw < 10) { date = "0" + date_raw} else {date = date_raw};
if (month_raw < 10) { month = "0" + month_raw} else {month = date_raw};
let hours = newDate.getHours();
if (hours < 10) { hours = `0${hours}`;}
let minutes = newDate.getMinutes(); 
if (minutes < 10) {minutes = `0${minutes}`;}
  


return (
    <div>
<div className="container">
  <div className="row">
    <div className="col-sm">
      <div className="date-time">
      {date}/{month}/{year} |  {hours}:{minutes}
      </div>
       
       
            
    </div>
  </div>
</div>
</div>
  )
}

export default Header