/* eslint-disable @typescript-eslint/ban-ts-comment */
import React,{ useState, useContext } from "react";
/** Libraries */
import { useHistory } from "react-router-dom";
/** Components */
import { Searchbar } from "components/Searchbar";
import { BasicTable } from "components/BasicTable";
/** Context  */
import { ChemicalDataContext } from "context/chemicalData/chemicalDataContext";
/** Types */
import { resultBoxProps, ChemicalData } from "./types";  
/** Constants */
import { tableColumnTitlesKeys } from "constants/tableColumnTitles";
import { SEARCHBAR_PLACEHOLDER, CHEMICAL_TYPE_1, CHEMICAL_TYPE_2 } from "constants/texts";
/** Styles */
import "./style/resultBox.scss";

export const ResultBox = ({ title, data, type }: resultBoxProps) => {
    const [localQuery, setLocalQuery] = useState("");
    const [orderParam, setOrderParam] = useState("");
    const [isOrdered, setIsOrdered] = useState(false);
    const history = useHistory();

    const chemicalDataContext = useContext(ChemicalDataContext);
    const { filterChemicalData, filterChemicalData2, sortChemicalData, sortChemicalData2, getAllDocsByChemicalType } = chemicalDataContext;

    const handleSort = (key:string) => {
        if(type === CHEMICAL_TYPE_1){
            if(isOrdered){
                sortChemicalData(key, "asc");
                setOrderParam(key);
                setIsOrdered(!isOrdered);
            }else{
                sortChemicalData(key, "desc");
                setOrderParam(key)
                setIsOrdered(!isOrdered);
            }
        }
        if(type === CHEMICAL_TYPE_2){
            if(isOrdered){
                sortChemicalData2(key, "asc");
                setOrderParam(key);
                setIsOrdered(!isOrdered);
            }else{
                sortChemicalData2(key, "desc");
                setOrderParam(key);
                setIsOrdered(!isOrdered);
            }
        }
    }

    const handleQuerySearch = (text: string) => {
        if(!text){
            setLocalQuery("");
        }
        setLocalQuery(text);
        if(type === CHEMICAL_TYPE_1){
            filterChemicalData(text);
        }
        if(type === CHEMICAL_TYPE_2){
            filterChemicalData2(text)
        }    
    }

    const getLocalChemicalElement = (chemicalType:string) => {
        const local = data.find((elm: ChemicalData) => elm.chemical_type === chemicalType);
            
        if(local && local.chemical_type){
            getAllDocsByChemicalType(local.chemical_type)
            history.push({
                pathname: `/document/${local.chemical_type.replace("/","")}`,
                state: local.chemical_type
            });
        }
    }
    
    return (
        <div className="resultBox">
            <div className="resultBox__title">
                {title}
            </div>
            <div className="resultBox__searchbar">
                <Searchbar 
                    value={localQuery} 
                    placeholder={SEARCHBAR_PLACEHOLDER}
                    onChange={(localQuery: string) => handleQuerySearch(localQuery)}
                    hasKeyPress={false}
                />
            </div>
            <div className="resultBox__table" id="table-result">
                <BasicTable 
                    data={data} 
                    tableColumnTitles={tableColumnTitlesKeys}
                    onClickTableHeader={(objectProperty: string) => handleSort(objectProperty)}
                    onClickTableRow={(chemicalType:string) => getLocalChemicalElement(chemicalType)}
                    orderParam={orderParam}
                    isOrdered={isOrdered}
                    hasActions={false}
                    objectProperties={tableColumnTitlesKeys}
                />
            </div>
        </div>
    )
}
