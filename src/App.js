import './App.css';
import React from "react";

import VendingMachine from "./VendingMachine";
import Chips from "./Chips";
import Soda from "./Soda";
import Sardines from "./Sardines";
import NavBar from "./NavBar";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/chips" exact element={<Chips />}>
          </Route>
          <Route path="/soda" exact element={<Soda />}>
          </Route>
          <Route path="/sardines" exact element={<Sardines />}>
          </Route>
          <Route path="/" exact element={<VendingMachine />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
