import React from "react";
import Home from './Home';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contactus from './Contactus';
import Aboutus from './Aboutus';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home />}></Route>
        <Route  path="/contactus" element={<Contactus />}> </Route>
        <Route  path="/aboutus" element={<Aboutus />}> </Route>
      </Routes>
    </BrowserRouter>
    
  );
}


export default App;
