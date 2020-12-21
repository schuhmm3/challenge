import {
    GET_CHEMICAL_DATA,
    GET_CHEMICAL_DATA_2,
    CLEAR_CHEMICAL_DATA,
    CLEAR_CHEMICAL_DATA_2,
    SET_QUERY,
    FILTER_CHEMICAL_DATA,
    FILTER_CHEMICAL_DATA_2,
    SORT_CHEMICAL_DATA,
    GET_CHEMICAL_ELEMENT,
} from "../types";

import { sortTable } from "utils/functions";

export default (state, action) => {
    switch (action.type) {
        case GET_CHEMICAL_DATA:
            return {
                ...state,
                chemicalData: action.payload,
                chemicalDataFiltered: action.payload,
            };
        case GET_CHEMICAL_DATA_2:
            return {
                ...state,
                chemicalData2: action.payload,
                chemicalData2Filtered: action.payload,
            };
        case CLEAR_CHEMICAL_DATA:
            return {
                ...state,
                query: "",
                chemicalData: null,
                chemicalDataFiltered: null,
            };
        case CLEAR_CHEMICAL_DATA_2:
            return {
                ...state,
                query: "",
                chemicalData2: null,
                chemicalData2Filtered: null,
            };
        case SET_QUERY:
            return {
                ...state,
                query: action.payload,
            };
        case FILTER_CHEMICAL_DATA:
            return {
                ...state,
                chemicalDataFiltered: state.chemicalData.filter(dataItem =>
                    dataItem.chemical_type
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                ),
            };
        case FILTER_CHEMICAL_DATA_2:
            return {
                ...state,
                chemicalData2Filtered: state.chemicalData2.filter(dataItem =>
                    dataItem.chemical_type
                        .toLowerCase()
                        .includes(action.payload.toLowerCase())
                ),
            };
        case SORT_CHEMICAL_DATA:
            return {
                ...state,
                chemicalDataFiltered: state.chemicalData.sort(sortTable),
                chemicalData2Filtered: state.chemicalData2.sort(sortTable),
            };
        case GET_CHEMICAL_ELEMENT:
            return {
                ...state,
                chemicalTypeDocs: action.payload,
            };

        default:
            return state;
    }
};
