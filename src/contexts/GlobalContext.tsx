import { Dispatch, SetStateAction, createContext } from "react";
import ProductType from "../types/ProductType";

type GlobalContextType = {
    openModal: boolean;
    handleConfirmModal: () => void,
    handleCloseModal: () => void,
    handleOpenModal: () => void,
    allProducts: ProductType[],
    setAllProducts: Dispatch<SetStateAction<ProductType[]>>;
}

const GlobalContext = createContext<GlobalContextType>({
    openModal: false,
    handleConfirmModal: () => { },
    handleCloseModal: () => { },
    handleOpenModal: () => { },
    allProducts: [],
    setAllProducts: () => { }
});

export default GlobalContext;