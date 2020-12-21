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
            url: `/api/chemical_type/?chemicalName=${query}`,
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

export const getChemicalTypes2 = async (query: string): Promise<any> => {

    try {
        const response = await axios.request({
            method: "GET",
            baseURL: getEnvVariable(REACT_APP_API),
            url: `/api/chemical_type_2/?chemicalName=${query}`,
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

export const getDocsByChemicalType = async (query: string): Promise<any> => {

    try {
        const response = await axios.request({
            method: "GET",
            baseURL: getEnvVariable(REACT_APP_API),
            url: `/api/chemical_type/name/?chemicalName=${query}`,
        });
        if (response.status === STATUS_OK) {
            return response.data;
        } else {
            console.error("error", response);
            return ERROR;
        }
    } catch (error) {
        console.error(`Error getting chemical doc types ${error}`);
    }
    return ERROR;
    
};

export const getDocsByChemicalType2 = async (query: string): Promise<any> => {

    try {
        const response = await axios.request({
            method: "GET",
            baseURL: getEnvVariable(REACT_APP_API),
            url: `/api/chemical_type_2/name?chemicalName=${query}`,
        });
        if (response.status === STATUS_OK) {
            return response.data;
        } else {
            console.error("error", response);
            return ERROR;
        }
    } catch (error) {
        console.error(`Error getting chemical doc types ${error}`);
    }
    return ERROR;
    
};


export const getAllChemicalData = async (): Promise<any> => {

    try {
        const response = await axios.request({
            method: "GET",
            baseURL: getEnvVariable(REACT_APP_API),
            url: `/api/data`,
        });
        if (response.status === STATUS_OK) {
            return response.data;
        } else {
            console.error("error", response);
            return ERROR;
        }
    } catch (error) {
        console.error(`Error getting chemical doc types ${error}`);
    }
    return ERROR;
    
};