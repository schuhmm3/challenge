import React, {useState, useEffect } from "react";
/** Components */
import { Layout } from "containers/Layout";
import { BasicTable } from "components/BasicTable";
import { Spinner } from "components/Spinner";
/** Services */
import { getAllChemicalData } from "services/homePageService";
/** Constants */
import { tableColumnTitlesDocsKeys, tableColumnTHeaderTitleDocs } from "constants/tableColumnTitles";
import { DOCUMENTS_PAGE_TITLE } from "constants/texts";
/** Styles */
import "./style/documents.scss";

export const Documents = () => {

    const [ localChemicalData, setLocalChemicalData ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        setLoading(true)
        getAllChemicalData().then(response => setLocalChemicalData(response));
        setLoading(false);
    })

    return(
        <Layout>
            <div className="documents">
                <div className="documents__title">
                    <h2>{DOCUMENTS_PAGE_TITLE}</h2>
                </div>
                <div className="documents__content">
                    {
                        loading ? 
                        <Spinner message={""} size={200}/> 
                        : 
                        <BasicTable 
                            data={localChemicalData} 
                            tableColumnTitles={tableColumnTitlesDocsKeys} 
                            tableColumnHeaderTitles={tableColumnTHeaderTitleDocs}
                            onClickTableHeader={() => ({})}
                            onClickTableRow={() => ({})}
                            hasActions={false}
                        /> 
                    }
                </div>

            </div>
        </Layout>
    )
}