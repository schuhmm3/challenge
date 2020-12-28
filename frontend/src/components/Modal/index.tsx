import React from "react";
/**Libraries */
import { createPortal } from "react-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
/**Components */
import { Button } from "components/Button";
/** Types */
import { ModalProps } from "./types";
/** Styles */
import "./style/modal.scss";

const modalRoot = document.getElementById("another-root");

export const Modal = ({
    isOpen,
    setModalIsOpen,
    modalTitle,
    confirmationButtonText,
    cancelButtonText,
    children,
    handleConfirmAction,
    handleCancelAction,
    hasCloseIcon = true,
}: ModalProps) => {

    return modalRoot && isOpen
        ?   createPortal(
                <div className="modal__container">
                    <div className="modal">
                        <div className="modal__header">
                            <span>{modalTitle}</span>
                                {hasCloseIcon && (
                                    <span
                                        onClick={() => {
                                            handleCancelAction &&
                                            handleCancelAction();
                                            setModalIsOpen(false);
                                        }}
                                    >
                                        <FontAwesomeIcon
                                            icon={faTimes}
                                        ></FontAwesomeIcon>
                                    </span>
                                )}
                      </div>
                      <div className="modal__body">{children}</div>
                        {(confirmationButtonText || cancelButtonText) && (
                            <div className="modal__buttons">
                                {cancelButtonText && (
                                    <Button
                                        textButton={cancelButtonText}
                                        onClickedButton={() => {
                                            handleCancelAction &&
                                            handleCancelAction();
                                            setModalIsOpen(false);
                                        }}
                                    />
                                )}
                                {confirmationButtonText && (
                                    <Button
                                        textButton={confirmationButtonText}
                                        onClickedButton={() => {
                                            handleConfirmAction &&
                                            handleConfirmAction();
                                            setModalIsOpen(false);
                                        }}
                                    />
                                )}
                            </div>
                        )}
                    </div>
                </div>,
                modalRoot
            )
        : null;
};
