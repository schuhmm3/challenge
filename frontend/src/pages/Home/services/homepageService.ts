import {
    getEnvVariable,
    REACT_APP_API,
} from "services/environmentService";

import { STATUS_OK, ERROR } from "constants/api";
import axios from "axios";

export const getChemicalTypes = async (query: string): Promise<any> => {

    try {
        const response = await axios.request({
            method: "GET",
            baseURL: getEnvVariable(REACT_APP_API),
            url: `/api/chemical_type_1/search/?chemicalName=${query}`,
        });
        if (response.status === STATUS_OK) {
            return response.data;
        } else {
            console.error("error", response);
            return ERROR;
        }
    } catch (error) {
        console.error(`Error getting chemical types ${error}`);
    }
    return ERROR;
    
};