import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Button from "components/Button";
import Spinner from "components/Spinner";
import EditableField from "./components/EditableField";
import { deepCopyFunction } from "./utils";

import "./basicTable.scss";

const BasicTable = ({ id, rows, setRows, setRow, columnNames, loading }) => {
    const [copyRows, setCopyRows] = useState([]);
    useEffect(() => {
        setCopyRows(deepCopyFunction(rows));
    }, [rows]);
    const renderTableData = () => {
        return rows?.map((row, rowIndex) => {
            const keys = Object.keys(columnNames);
            return (
                <tr key={row.id}>
                    {keys?.map((key, columnIndex) => {
                        let RowComponent;
                        let ActionComponent;
                        let EditableComponent;
                        // If the cell contains a component
                        if (columnNames[key]?.isComponent) {
                            RowComponent = columnNames[key]?.component;
                            // If is an action cell
                        } else if (columnNames[key]?.isActionComponent) {
                            ActionComponent =
                                Array.isArray(columnNames[key]?.actions) &&
                                columnNames[key]?.actions.map(action => (
                                    <div
                                        key={action.label}
                                        className="go-table__actions"
                                    >
                                        <Button
                                            textButton={action.label}
                                            onClickedButton={() =>
                                                action?.handleAction(row.id)
                                            }
                                            iconName={action.icon}
                                            color="gray"
                                        />
                                    </div>
                                ));
                        } else if (columnNames[key]?.isEditableField) {
                            EditableComponent = (
                                <EditableField
                                    value={row[key]}
                                    setValue={newValue => {
                                        copyRows[rowIndex][key] = newValue;
                                        setRow &&
                                            setRow(newValue, rowIndex, key);
                                        setRows && setRows(copyRows);
                                    }}
                                    properties={columnNames[key]?.properties}
                                />
                            );
                        }
                        return (
                            <td key={columnIndex}>
                                {RowComponent ? (
                                    <RowComponent
                                        value={row[key]}
                                        setValue={newValue => {
                                            copyRows[rowIndex][key] = newValue;
                                            setRow &&
                                                setRow(newValue, rowIndex, key);
                                            setRows && setRows(copyRows);
                                        }}
                                        properties={
                                            columnNames[key]?.properties
                                        }
                                    />
                                ) : ActionComponent ? (
                                    ActionComponent
                                ) : EditableComponent ? (
                                    EditableComponent
                                ) : (
                                    row[key]
                                )}
                            </td>
                        );
                    })}
                </tr>
            );
        });
    };
    const renderTableHeader = () => {
        const keys = Object.keys(columnNames);
        return keys?.map((key, index) => {
            return <th key={index}>{columnNames[key].label}</th>;
        });
    };

    return !loading ? (
        <table className="go-table" id={id}>
            <thead>
                <tr className="go-table__header">{renderTableHeader()}</tr>
            </thead>
            <tbody>{renderTableData()}</tbody>
        </table>
    ) : (
        <div className="go-table__loading">
            <Spinner />
        </div>
    );
};

BasicTable.propTypes = {
    id: PropTypes.string,
    rows: PropTypes.array.isRequired,
    columnNames: PropTypes.any.isRequired,
    loading: PropTypes.bool,
    setRows: PropTypes.func,
    setRow: PropTypes.func,
};

export default BasicTable;
