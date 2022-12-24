import React from "react";
//import Home from "./routes/Home";
import './App.css';
import {Outlet, Route, Router, Routes } from "react-router-dom";
import About from './routes/About';
import Home from "./routes/Home";
import Navigation from "./Component/Navigation";
import Detail from "./routes/Detail";


function App() {
  return (
    
    <div>
      <header> {<Navigation/>}</header>
      <Outlet />
    <Routes>
    <Route path="*" element={<Navigation />}/>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/movie-detail" element={<Detail/>} /> 
   </Routes>
    </div>
  ); 
  //<Home />;
};

export default App;
