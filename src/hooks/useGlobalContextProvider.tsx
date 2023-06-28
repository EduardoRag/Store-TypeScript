import { useState } from "react";
import ProductType from "../types/ProductType";
import products from "../data/products";


const useGlobalContextProvider = () => {
    const [openModal, setOpenModal] = useState(false);
    const [allProducts, setAllProducts] = useState<ProductType[]>([...products]);

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
        handleOpenModal,
        allProducts,
        setAllProducts
    }
}

export default useGlobalContextProvider;