import React from "react";
/** Routes */
import { Routes } from "./routes";
/** Global Context state */
import { ChemicalDataState } from "context/chemicalData/ChemicalDataState";
import './App.css';

function App() {
  return (
    <ChemicalDataState>
      <Routes />
    </ ChemicalDataState>
  );
}

export default App;
