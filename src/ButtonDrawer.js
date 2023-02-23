import React from "react";
import Drawer from "react-bottom-drawer";
import DrawerContent from "./DrawerContent";
import './App.css';
import './ButtonDrawer.css';

export default function ButtonDrawer(props) {
  
  const [isVisible, setIsVisible] = React.useState(true);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);
 
   
 
  // scroll anywhere
// window.addEventListener('scroll',() => openDrawer)


  return (
    <div>
    
      <center>
        <button className="open-btn-arrow" onClick={openDrawer}>
          <span></span>
        </button>
      </center>
      <div className="justify-content-md-center">
         
      <Drawer 
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
        className="drawerWrapper "

      >
        <DrawerContent weatherData={props.weatherData}/>
      </Drawer>
    </div>
    </div>
  );
 
}
