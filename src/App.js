import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Single from "./components/Single";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Single />} />
      </Routes>
    </div>
  );
};

export default App;
