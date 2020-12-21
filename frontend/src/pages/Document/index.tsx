import React, { useContext } from "react";
/** Libraries */
import { useHistory } from "react-router-dom";
/** Components */
import { Layout } from "containers/Layout";
import { BasicTable } from "components/BasicTable";
import { Button } from "components/Button";
/** Context  */
import { ChemicalDataContext } from "context/chemicalData/chemicalDataContext";
/** Constants */
import { tableColumnTitlesDocsKeys, tableColumnTHeaderTitleDocs } from "constants/tableColumnTitles";
import { DOCUMENTS_PAGE_TITLE, GO_BACK_TEXT_BUTTON } from "constants/texts";
/** Styles */
import "./style/document.scss";

export const Document = () => {
    const history = useHistory();

    const chemicalDataContext = useContext(ChemicalDataContext);
    const { chemicalTypeDocs } = chemicalDataContext;

    return(
        <Layout>
            <div className="documents">
                <div className="documents__title">
                    <h2>{DOCUMENTS_PAGE_TITLE}</h2>
                </div>
                <div className="documents__searched">
                    <span>{history.location.state}</span>
                </div>
                <div className="documents__content">
                    <BasicTable 
                        data={chemicalTypeDocs} 
                        tableColumnTitles={tableColumnTitlesDocsKeys} 
                        tableColumnHeaderTitles={tableColumnTHeaderTitleDocs}
                        onClickTableHeader={() => ({})}
                        onClickTableRow={() => ({})}
                        hasActions={true}
                    />
                </div>
                <div className= "documents__button">
                    <Button textButton={GO_BACK_TEXT_BUTTON} onClickedButton={() => history.push("/")}/>
                </div>
            </div>
        </Layout>
    )
}