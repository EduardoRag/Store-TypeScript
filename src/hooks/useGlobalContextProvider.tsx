import { useState } from "react";


const useGlobalContextProvider = () => {
    const [openModal, setOpenModal] = useState(false);

    const handleConfirmModal = () => {
        setOpenModal(false);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleOpenModal = () => {
        setOpenModal(true);
    }

    return {
        openModal,
        handleConfirmModal,
        handleCloseModal,
        handleOpenModal
    }
}

export default useGlobalContextProvider;