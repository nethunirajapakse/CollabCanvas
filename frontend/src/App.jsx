import React, { useEffect, useState } from "react";

import "./index.css";
import "./App.css";
import RoomPage from "./pages/RoomPage";
import Canvas from "./components/Canvas";
import Home from "./pages/Home";

function App() {
  return (
    <div>
      <div>
        {" "}
        <RoomPage />
        <Canvas />
        <Home />
      </div>
    </div>
  );
}

export default App;
