/* eslint-disable react/display-name */
import React from "react";

// This is the table constant/settings which needed to render table elements
const tableConstants = () => {
    return [
        {
            title: "Name",
            render: rowData => {
                return <span>{rowData.chemical_type_1}</span>;
            },
        },
        {
            title: "Documents",
            render: rowData => {
                return <span>{rowData.patent_title}</span>;
            },
        },
    ];
};
tableConstants.displayName = "TableConstants";

export default tableConstants;
