import React from "react";
/** Components */
import { Searchbar } from "components/Searchbar";
import { BasicTable } from "components/BasicTable";
import tableConstants from "components/BasicTable/tableConstants";
/** Types */
import { resultBoxProps } from "./types";  
/** Styles */
import "./style/resultBox.scss";

export const ResultBox = ({ title, data }: resultBoxProps) => {
    return(
        <div className="resultBox">
            <div className="resultBox__title">
                {title}
            </div>
            <div className="resultBox__searchbar">
                <Searchbar />
            </div>
            <div className="resultBox__table" id="table-result">
                <BasicTable cols={tableConstants()} data={data}/>
            </div>
        </div>
    )
}
