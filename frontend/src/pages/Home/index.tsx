import React, { useState, useContext } from "react";
/** Libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook } from "@fortawesome/free-solid-svg-icons";
/** Containers */
import { Layout } from "containers/Layout";
/** Components */
import { Searchbar } from "components/Searchbar";
import { ResultBox } from "components/ResultBox";
import { DocumentCard } from "components/DocumentCard";
import { Spinner } from "components/Spinner";
/** Context  */
import { ChemicalDataContext } from "context/chemicalData/chemicalDataContext";
/** Utils */
import { countTotalUniquePatents } from "utils/functions";
/** Constants */
import { TOTAL_DOCUMENTS, SPINNER_MESSAGE, SEARCHBAR_PLACEHOLDER, NO_RESULTS_FOUND, TEXT_TABLE_1, TEXT_TABLE_2, CHEMICAL_TYPE_1, CHEMICAL_TYPE_2, ERROR_CONNECTION_MESSAGE, SEARCHBAR_ICONNAME } from "constants/texts";
/** Assets */
import LogoBasf from "assets/png/basf-logo-transparent.png";
/** Styles */
import "./style/home.scss";

export const Home = () => {
    const chemicalDataContext = useContext(ChemicalDataContext);
    const { chemicalData, chemicalData2, chemicalDataFiltered, chemicalData2Filtered, query, getChemicalData, getChemicalData2, setQueryData, clearChemicalData } = chemicalDataContext;
    const [loading, setLoading] = useState<boolean>(false);
    const [isSubmited, setIsSubmited] = useState<boolean>(false);
 
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
            await getChemicalData(query);
            await getChemicalData2(query);
            
            setQueryData("");
            setLoading(false);
            setIsSubmited(true);
        }
    }

    const renderResults = () => {
        return (
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
                            {countTotalUniquePatents(chemicalData) + countTotalUniquePatents(chemicalData2)}
                        </div>
                    </DocumentCard>
                </div>
                <div className = "homePage-content__results">
                        {
                            chemicalDataFiltered && Array.isArray(chemicalDataFiltered) ? (
                                <>
                                    <ResultBox title={TEXT_TABLE_1} data={chemicalDataFiltered} type={CHEMICAL_TYPE_1}/>
                                    <ResultBox title={TEXT_TABLE_2} data={chemicalData2Filtered} type={CHEMICAL_TYPE_2}/>
                                </>
                            ) : ERROR_CONNECTION_MESSAGE
                        }
                </div>
            </>
        )
    }

    return (
        <Layout>
            <div className="homePage">
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
                            iconName={SEARCHBAR_ICONNAME}
                            hasKeyPress={true}
                        />
                    </div>
                        {
                            loading 
                               ? <Spinner message={SPINNER_MESSAGE} size={"xl"} />
                               : ( chemicalData.length > 0 ? renderResults() : isSubmited && NO_RESULTS_FOUND )
                        }

                    </div>
            </div>
        </Layout>
    )
}