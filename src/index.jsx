import React, { useState } from "react";
import "./index_module.css";

import TopBar from "./TopBar.jsx";
import ToolBar from "./ToolBar.jsx";
import NavBar from "./NavBar.jsx";
export const Header = () => {
  const [CarouselToolBar, SetCarouselToolBar] = useState(2);

  const funciones = {
    prueba1: () => 
    {
      console.log('Esta es prueba')    
    }
  }
  return (
    <div>
      <NavBar pruebas={funciones} />
      <TopBar SetCarouselToolBar={SetCarouselToolBar} />
      <ToolBar CarouselBar={CarouselToolBar} />
    </div>
  );
};
