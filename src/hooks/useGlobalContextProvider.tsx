import { useState } from "react";
import ProductType from "../types/ProductType";
import products from "../data/products";


const useGlobalContextProvider = () => {
    const [openModal, setOpenModal] = useState(false);
    const [currentIdProduct, setCurrentIdProduct] = useState(0);
    const [allProducts, setAllProducts] = useState<ProductType[]>([...products]);

    const handleConfirmModal = () => {
        const localProducts = [...allProducts];

        const currenctProductIndex = localProducts.findIndex((product) => product.id === currentIdProduct);

        localProducts.splice(currenctProductIndex, 1);

        setAllProducts([...localProducts]);
        setOpenModal(false);
    }

    const handleCloseModal = () => {
        setOpenModal(false);
    }

    const handleOpenModal = (productId: number) => {
        setCurrentIdProduct(productId);
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