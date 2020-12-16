import React, { useState, useContext } from "react";
/** Libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
/** Containers */
import { Layout } from "containers/Layout";
/** Components */
import { Searchbar } from "components/Searchbar";
import { BasicTable } from "components/BasicTable";
import { DocumentCard } from "components/DocumentCard";
import { Spinner } from "components/Spinner";
import tableConstants from "components/BasicTable/tableConstants";
/** Context  */
import { ChemicalDataContext } from "context/chemicalData/chemicalDataContext";
/** Services */
import { getChemicalTypes } from "services/homePageService";
/** Types */
import { ChemicalDataState } from "./types";
/** Utils */
import { countTotalUniquePatents } from "utils/functions";
/** Constants */
import { TOTAL_DOCUMENTS, SPINNER_MESSAGE, SEARCHBAR_PLACEHOLDER } from "constants/texts";
/** Assets */
import LogoBasf from "assets/png/basf-logo-transparent.png";
/** Styles */
import "./style/home.scss";
export const Home = () => {
    const chemicalDataContext = useContext(ChemicalDataContext);
    const { chemicalData, query, getChemicalData, setQueryData, clearChemicalData } = chemicalDataContext;
    const [loading, setLoading] = useState<boolean>(false);
 
    const handleQuerySearch = (text: string) => {
        if(!text){
            setQueryData("");
        }
        setQueryData(text);
    }

    const submitQuery = async() => {
        if(query === ""){
            clearChemicalData()
        }else{
            setLoading(true);
            getChemicalData(query)
            setQueryData(query);
            setLoading(false);   
        }
    }

    return (
        <Layout>
            <div className="homePage">
                {console.log("THIS IS CONTEXT RESULT =>", chemicalData)}
                <div className= "homePage__logo">
                    <img src={LogoBasf} />
                </div>
                <div className ="homePage-content">
                    <div className="homePage-content__searchbar">
                        <Searchbar 
                            value={query} 
                            placeholder={SEARCHBAR_PLACEHOLDER}
                            onChange={(query: string) => handleQuerySearch(query)}
                            onClickSearchbar={() => submitQuery()}
                            iconName={"search"}
                        />
                    </div>
                        {
                            loading 
                                ?   <Spinner message={SPINNER_MESSAGE} size={200} /> 
                                :   chemicalData.length > 0 && (
                                    <>
                                        <div className="homePage-content__card">
                                            <DocumentCard>
                                                <div className="homePage-content__card-icon">
                                                {
                                                    <FontAwesomeIcon
                                                        icon={faBook}
                                                    ></FontAwesomeIcon>
                                                }
                                                </div>
                                                <div className="homePage-content__card-text">
                                                    {TOTAL_DOCUMENTS}
                                                </div>
                                                <div className="homePage-content__card-number">
                                                    {countTotalUniquePatents(chemicalData)}
                                                </div>
                                            </DocumentCard>
                                        </div>
                                        <div className = "homePage-content__table">
                                            <BasicTable cols={tableConstants()} data={chemicalData} striped />
                                            <BasicTable cols={tableConstants()} data={chemicalData} striped />
                                        </div>
                                    </>
                            )
                        }
                    </div>
            </div>
        </Layout>
    )
}