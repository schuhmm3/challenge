import { GET_CHEMICAL_DATA, CLEAR_CHEMICAL_DATA, SET_QUERY } from "../types";

export default (state, action) => {
    switch (action.type) {
        case GET_CHEMICAL_DATA:
            return {
                ...state,
                chemicalData: action.payload,
            };
        case CLEAR_CHEMICAL_DATA:
            return {
                ...state,
                query: "",
                chemicalData: [],
            };
        case SET_QUERY:
            return {
                ...state,
                query: action.payload,
            };

        default:
            return state;
    }
};
