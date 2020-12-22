import React from "react";

interface IContextTypes {
  query: string;
  chemicalData: null;
  chemicalDataFiltered: null;
  chemicalData2: null;
  chemicalData2Filtered: null;
  chemicalDataElement: null;
  chemicalTypeDocs: null;
  chemicalTypeDocs2: null;
  getChemicalData: (query: string) => void;
  getChemicalData2: (query: string) => void;
  setQueryData: (query:string) => void;
  clearChemicalData: () => void;
  clearChemicalData2: () => void;
  filterChemicalData: (query:string) => void;
  filterChemicalData2: (query:string) => void;
  sortChemicalData: (key:string, order:string) => void;
  sortChemicalData2: (key:string, order:string) => void;
  getAllDocsByChemicalType: (chemicalType:string) => void;
  getAllDocsByChemicalType2: (chemicalType:string) => void;
}

const initialContextValues  = {
  query: "",
  chemicalData: null,
  chemicalDataFiltered: null,
  chemicalData2: null,
  chemicalData2Filtered: null,
  chemicalDataElement: null,
  chemicalTypeDocs: null,
  chemicalTypeDocs2: null,
  getChemicalData: () => ({}),
  getChemicalData2: () => ({}),
  setQueryData: () => ({}),
  clearChemicalData: () => ({}),
  clearChemicalData2: () => ({}),
  filterChemicalData: () => ({}),
  filterChemicalData2: () => ({}),
  sortChemicalData: () => ({}),
  sortChemicalData2: () => ({}),
  getAllDocsByChemicalType: () => ({}),
  getAllDocsByChemicalType2: () => ({}),
}



export const ChemicalDataContext = React.createContext<IContextTypes>(initialContextValues)
