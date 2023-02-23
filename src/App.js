import React from "react";
import './App.css';

import Header from './Header';
import WeatherNow from './Weather';

import DrawerContent from "./DrawerContent";


function App() {
 
 
 

  return (
    <div className="App" >
      <Header />
      <WeatherNow defaultCity='Poltava' />
     
   
      
    </div>
  );
}

export default App;
