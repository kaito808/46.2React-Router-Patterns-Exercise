import React, { useState, useEffect } from "react";
import {
  Outlet,
  Route,
  BrowserRouter,
  Routes,
  Navigate,
} from "react-router-dom";

import ColorList from "./ColorList";
import NewColorForm from "./NewColorForm";
import Color from "./Color";

function Routess() {
  const initialColors = JSON.parse(localStorage.getItem("colors")) || {
    red: "#FF0000",
    green: "#00FF00",
    blue: "#0000FF",
  };
  const [colors, updateColors] = useState(initialColors);

  useEffect(
    () => localStorage.setItem("colors", JSON.stringify(colors)),
    [colors]
  );

  function handleAdd(newColorObj) {
    updateColors((prevColors) => ({ ...prevColors, ...newColorObj }));
  }

  return (
    <div>
      <Outlet />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/colors" />} />
          <Route path="/colors" element={<ColorList colors={colors} />} />
          <Route
            path="/colors/new"
            element={<NewColorForm addColor={handleAdd} />}
          />
          <Route path="/colors/:color" element={<Color colors={colors} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default Routess;
