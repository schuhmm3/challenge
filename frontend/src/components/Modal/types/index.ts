export type ModalProps = {
    isOpen: boolean;
    setModalIsOpen: Function;
    modalTitle: string;
    confirmationButtonText?: string;
    cancelButtonText?: string;
    confirmationButtonColor?: string;
    cancelButtonColor?: string;
    children: React.ReactNode;
    handleConfirmAction?: Function;
    handleCancelAction?: Function;
    hasCloseIcon?: boolean;
};
