import React,{ useState } from "react";
/** Libraries */
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faSortUp, faSortDown } from "@fortawesome/free-solid-svg-icons";
/** Components */
import { Modal } from "components/Modal";
/** Types */
import { BasicTableProps } from "./types"; 
/** Constants */
import { MODAL_BODY_MESSAGE, MODAL_HEADER_MESSAGE, MODAL_BUTTON_CONFIRM, MODAL_BUTTON_CANCEL } from "constants/texts";
import { BASE_URL_PATENT_REDIRECT } from "constants/urls";
import { TRANSPARENT_COLOR } from "constants/colors";
/** Styles */
import "./style/basicTable.scss";

export const BasicTable = ({ data, tableColumnTitles, tableColumnHeaderTitles, onClickTableHeader, onClickTableRow, order, hasActions } : BasicTableProps) => {

    const [isModalOpen, setModalIsOpen] = useState(false);
    const [patentNumber, setPatentNumber] = useState("");

    const redirectToExternalUrl = () => {
        window.open(
            `${BASE_URL_PATENT_REDIRECT}/${patentNumber}`,
            "_blank"
        );
    }

    const openModal = (patent:string) => {
        setModalIsOpen(!isModalOpen);
        setPatentNumber(patent);
    };

    const showModal = () => {
        return (
            <Modal
                isOpen={isModalOpen}
                modalTitle={MODAL_HEADER_MESSAGE}
                confirmationButtonText={MODAL_BUTTON_CONFIRM}
                cancelButtonText={MODAL_BUTTON_CANCEL}
                setModalIsOpen={setModalIsOpen}
                handleConfirmAction={() => redirectToExternalUrl()}
                cancelButtonColor={TRANSPARENT_COLOR}
                confirmationButtonColor={TRANSPARENT_COLOR}
            >
                <div className="modal">
                    {MODAL_BODY_MESSAGE}
                </div>
            </Modal>
        );
    };

    const renderHeader = () => {
        return tableColumnHeaderTitles.map((key, index) => {
           return (
                <th key={index}>
                    <div>{key}</div>
                    <div><FontAwesomeIcon icon={order ? faSortUp : faSortDown}></FontAwesomeIcon></div>
                </th>
           );
        });
    };

    const renderBody = () => {
        return (
            data.map(( row:any,index:number ) => {
                return (
                    <tr key={index} onClick={() => onClickTableRow(row.chemical_type)}>
                        {
                            tableColumnTitles.map((column, index) => {
                                return <td key={index}>{row[column]}</td>
                            })
                        }
                        {hasActions && (
                            <td onClick={() => openModal(row.patent_number)}>
                                <FontAwesomeIcon
                                    icon={faBook}
                                ></FontAwesomeIcon>
                            </td>
                        )}
                    </tr>
                );
            })
        );
    };

    return (
        <>
            <table className="basicTable">
                <thead onClick={() => onClickTableHeader()}>
                    <tr>{renderHeader()}</tr>
                </thead>
                <tbody>{renderBody()}</tbody>
            </table>
            {isModalOpen && showModal()}
        </>
    );
};
