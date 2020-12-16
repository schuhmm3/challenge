import React, { useReducer } from "react";
import { ChemicalDataContext } from "./chemicalDataContext";
import chemicalDataReducer from "./chemicalDataReducer";
import { getChemicalTypes } from "services/homePageService";
import {
    GET_CHEMICAL_DATA,
    SET_CHEMICAL_DATA,
    CLEAR_CHEMICAL_DATA,
    SET_QUERY,
} from "../types";

export const ChemicalDataState = ({ children }: any) => {
    const initialState = {
        query: "",
        chemicalData: [],
    };

    const [state, dispatch] = useReducer(chemicalDataReducer, initialState);

    // GET CHEMICAL DATA
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
                payload: "err.response.msg",
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

    return (
        <ChemicalDataContext.Provider
            value={{
                chemicalData: state.chemicalData,
                query: state.query,
                getChemicalData,
                setQueryData,
                clearChemicalData,
            }}
        >
            {children}
        </ChemicalDataContext.Provider>
    );
};
