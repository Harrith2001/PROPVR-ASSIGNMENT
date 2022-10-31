import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import { BrowserRouter,Routes , Route, useParams} from "react-router-dom";
import Home from "./Home";
import Photodetail from "./Photodetail"

function App() {
  return (
  <>
    <BrowserRouter >
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/photo/:photoid" element={<Photodetail/>}/>
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
