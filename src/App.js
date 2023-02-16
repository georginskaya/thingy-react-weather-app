import React from "react";
import './App.css';

import Header from './Header';
import WeatherNow from './WeatherNow';
import ButtonDrawer from "./ButtonDrawer";
import DrawerContent from "./DrawerContent";


function App() {
  return (
    <div className="App">
      <Header />
      <WeatherNow defaultCity="Munich"/>
     < ButtonDrawer />
   
      
    </div>
  );
}

export default App;
