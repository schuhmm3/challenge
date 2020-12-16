import React, { useState } from "react";
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
/** Services */
import { getChemicalTypes } from "./services/homepageService";
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
    const [query, setQuery] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);
    const [data, setData] = useState<ChemicalDataState[]>([]);

    const handleQuerySearch = (text: string) => {
        if(!text){
            setQuery("");
        }
        setQuery(text);
    }

    const submitQuery = async() => {
        if(query === ""){
            setData([]);
        }else{
            setLoading(true);
            const chemicalTypes = await getChemicalTypes(query);
            setData(chemicalTypes);
            setQuery("");
            setLoading(false);   
        }
    }

    const handleEdit = (item:any) => () => {
        // write your logic
        console.log(JSON.stringify(item))
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
                            iconName={"search"}
                        />
                    </div>
                        {
                            loading 
                                ?   <Spinner message={SPINNER_MESSAGE} size={200} /> 
                                :   data.length > 0 && (
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
                                                    {countTotalUniquePatents(data)}
                                                </div>
                                            </DocumentCard>
                                        </div>
                                        <div className = "homePage-content__table">
                                            <BasicTable cols={tableConstants(handleEdit)} data={data} striped />
                                            <BasicTable cols={tableConstants(handleEdit)} data={data} striped />
                                        </div>
                                    </>
                            )
                        }
                    </div>
            </div>
        </Layout>
    )
}