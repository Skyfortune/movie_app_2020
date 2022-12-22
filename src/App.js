import React from "react";
//import Home from "./routes/Home";
import './App.css';
import {Route, Router, Routes } from "react-router-dom";
import About from './routes/About';
import Home from "./routes/Home";


function App() {
  return (
    
      <Routes>
        <Route path="/"       element={<Home />} />
        <Route path="/about"  element={<About />} />
      </Routes>
    
  ); 
  //<Home />;
}

export default App;
