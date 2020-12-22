import React, { useReducer } from "react";
import { ChemicalDataContext } from "./chemicalDataContext";
import chemicalDataReducer from "./chemicalDataReducer";
import {
    getChemicalTypes,
    getChemicalTypes2,
    getDocsByChemicalType,
    getDocsByChemicalType2,
} from "services/homePageService";
import {
    GET_CHEMICAL_DATA,
    GET_CHEMICAL_DATA_2,
    CLEAR_CHEMICAL_DATA,
    CLEAR_CHEMICAL_DATA_2,
    SET_QUERY,
    FILTER_CHEMICAL_DATA,
    SORT_CHEMICAL_DATA,
    SORT_CHEMICAL_DATA_2,
    GET_CHEMICAL_ELEMENT,
    FILTER_CHEMICAL_DATA_2,
} from "../types";

export const ChemicalDataState = ({ children }: any) => {
    const initialState = {
        query: "",
        chemicalData: null,
        chemicalDataFiltered: null,
        chemicalData2: null,
        chemicalData2Filtered: null,
        chemicalDataElement: null,
        chemicalTypeDocs: null,
        chemicalTypeDocs2: null,
    };

    const [state, dispatch] = useReducer(chemicalDataReducer, initialState);

    // GET CHEMICAL DATA TABLE 1
    const getChemicalData = async query => {
        try {
            const res = await getChemicalTypes(query);
            dispatch({
                type: GET_CHEMICAL_DATA,
                payload: res,
            });
        } catch (err) {
            dispatch({
                type: CLEAR_CHEMICAL_DATA,
                payload: "err",
            });
        }
    };

    // GET CHEMICAL DATA TABLE 2
    const getChemicalData2 = async query => {
        try {
            const res = await getChemicalTypes2(query);
            dispatch({
                type: GET_CHEMICAL_DATA_2,
                payload: res,
            });
        } catch (err) {
            dispatch({
                type: CLEAR_CHEMICAL_DATA_2,
                payload: "err",
            });
        }
    };

    // SET QUERY SEARCH
    const setQueryData = async query => {
        dispatch({
            type: SET_QUERY,
            payload: query,
        });
    };

    // CLEAR CHEMICAL DATA
    const clearChemicalData = () => {
        dispatch({ type: CLEAR_CHEMICAL_DATA });
    };

    // CLEAR CHEMICAL DATA TABLE 2
    const clearChemicalData2 = () => {
        dispatch({ type: CLEAR_CHEMICAL_DATA_2 });
    };

    // FILTER CHEMICAL DATA TABLE 1
    const filterChemicalData = async query => {
        dispatch({
            type: FILTER_CHEMICAL_DATA,
            payload: query,
        });
    };

    // FILTER CHEMICAL DATA TABLE 2
    const filterChemicalData2 = async query => {
        dispatch({
            type: FILTER_CHEMICAL_DATA_2,
            payload: query,
        });
    };

    // SORT CHEMICAL DATA
    const sortChemicalData = async (key, order) => {
        dispatch({
            type: SORT_CHEMICAL_DATA,
            payload: [key, order],
        });
    };

    // SORT CHEMICAL DATA
    const sortChemicalData2 = async (key, order) => {
        dispatch({
            type: SORT_CHEMICAL_DATA_2,
            payload: [key, order],
        });
    };

    // GET ALL DOCS BY CHEMICAL TYPE TABLE 1
    const getAllDocsByChemicalType = async chemicalType => {
        const res = await getDocsByChemicalType(chemicalType);
        dispatch({
            type: GET_CHEMICAL_ELEMENT,
            payload: res,
        });
    };

    // GET ALL DOCS BY CHEMICAL TYPE TABLE 2
    const getAllDocsByChemicalType2 = async chemicalType => {
        const res = await getDocsByChemicalType2(chemicalType);
        dispatch({
            type: GET_CHEMICAL_ELEMENT,
            payload: res,
        });
    };

    return (
        <ChemicalDataContext.Provider
            value={{
                chemicalData: state.chemicalData,
                chemicalDataFiltered: state.chemicalDataFiltered,
                chemicalData2: state.chemicalData2,
                chemicalData2Filtered: state.chemicalData2Filtered,
                chemicalDataElement: state.chemicalDataElement,
                chemicalTypeDocs: state.chemicalTypeDocs,
                query: state.query,
                getChemicalData,
                getChemicalData2,
                setQueryData,
                clearChemicalData,
                clearChemicalData2,
                filterChemicalData,
                filterChemicalData2,
                sortChemicalData,
                sortChemicalData2,
                getAllDocsByChemicalType,
                getAllDocsByChemicalType2,
            }}
        >
            {children}
        </ChemicalDataContext.Provider>
    );
};
