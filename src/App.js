import React from "react";
import './App.css';

import Header from './Header';
import WeatherNow from './WeatherNow';


function App() {
  return (
    <div className="App">
      <Header />
      <WeatherNow defaultCity="Munich"/>
     
      
    </div>
  );
}

export default App;
