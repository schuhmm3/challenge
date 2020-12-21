import React,{ useState, useEffect, useContext } from "react";
/** Libraries */
import { useHistory } from "react-router-dom";
/** Components */
import { Searchbar } from "components/Searchbar";
import { BasicTable } from "components/BasicTable";
/** Context  */
import { ChemicalDataContext } from "context/chemicalData/chemicalDataContext";
/** Types */
import { resultBoxProps } from "./types";  
/** Constants */
import { tableColumnTitlesKeys, tableColumnHeaderTitle } from "constants/tableColumnTitles";
import { SEARCHBAR_PLACEHOLDER, CHEMICAL_TYPE_1, CHEMICAL_TYPE_2 } from "constants/texts";
/** Styles */
import "./style/resultBox.scss";

export const ResultBox = ({ title, data, type }: resultBoxProps) => {
    const [localQuery, setLocalQuery] = useState("");
    const [localChemicalData, setLocalChemicalData] = useState(null);
    const [localChemicalData2, setLocalChemicalData2] = useState(null);
    const history = useHistory();

    const chemicalDataContext = useContext(ChemicalDataContext);
    const { filterChemicalData, filterChemicalData2, sortChemicalData, chemicalDataFiltered, chemicalData2Filtered, getAllDocsByChemicalType, getAllDocsByChemicalType2 } = chemicalDataContext;

    useEffect(() => {
        setLocalChemicalData(chemicalDataFiltered)
        setLocalChemicalData2(chemicalData2Filtered)
        
    },[chemicalDataFiltered])

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
        // Refactor if time
        if(localChemicalData && type === CHEMICAL_TYPE_1){
            const local = localChemicalData.find((elm:any) => elm.chemical_type === chemicalType);
            getAllDocsByChemicalType(local.chemical_type)
            history.push({
                pathname: `/document/${local.chemical_type}`,
                state: local.chemical_type
            });
        }

        if(localChemicalData2 && type === CHEMICAL_TYPE_2){
            const local = localChemicalData2.find((elm:any) => elm.chemical_type === chemicalType);
            getAllDocsByChemicalType2(local.chemical_type)
            history.push({
                pathname: `/document/${local.chemical_type}`,
                state: local.chemical_type
            });
            
        }
    }
    
    return(
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
                    tableColumnHeaderTitles={tableColumnHeaderTitle}
                    onClickTableHeader={() => sortChemicalData()}
                    onClickTableRow={(patent:string) => getLocalChemicalElement(patent)}
                    hasActions={false}
                />
            </div>
        </div>
    )
}
