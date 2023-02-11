import React from "react";

export default function convertCtoF(celsius) {
  let fahrenheit= Math.round((celsius * 9/5) + 32);
  
  return fahrenheit;
}