import React from "react";

interface IContextTypes {
  query: string;
  chemicalData: any[];
  chemicalDataFiltered: any[];
  chemicalData2: any[];
  chemicalData2Filtered: any[];
  chemicalDataElement: null;
  chemicalTypeDocs: any[];
  chemicalTypeDocs2: any[];
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
  chemicalData: [],
  chemicalDataFiltered: [],
  chemicalData2: [],
  chemicalData2Filtered: [],
  chemicalDataElement: null,
  chemicalTypeDocs: [],
  chemicalTypeDocs2: [],
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
