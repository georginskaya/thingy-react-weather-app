import React from "react";
import Drawer from "react-bottom-drawer";
import DrawerContent from "./DrawerContent";
import './App.css';

export default function ButtonDrawer() {
  const [isVisible, setIsVisible] = React.useState(true);
  const openDrawer = React.useCallback(() => setIsVisible(true), []);
  const closeDrawer = React.useCallback(() => setIsVisible(false), []);

  return (
    <div >
      <center>
        <button className="open-btn-arrow" onClick={openDrawer}>
          <span></span>
        </button>
      </center>
      <Drawer
        duration={250}
        hideScrollbars={true}
        onClose={closeDrawer}
        isVisible={isVisible}
      >
        <DrawerContent />
      </Drawer>
    </div>
  );
}
