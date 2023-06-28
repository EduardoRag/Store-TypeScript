import { createContext } from "react";

type GlobalContextType = {
    openModal: boolean;
    handleConfirmModal: () => void,
    handleCloseModal: () => void,
    handleOpenModal: () => void
}

const GlobalContext = createContext<GlobalContextType>({
    openModal: false,
    handleConfirmModal: () => { },
    handleCloseModal: () => { },
    handleOpenModal: () => { }
});

export default GlobalContext;