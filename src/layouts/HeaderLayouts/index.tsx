import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import styles from './styles.module.scss';
import ConfirmModal from '../../components/ModalConfirm';
import { useState } from 'react';

function HeaderLayout() {
    const [openModal, setOpenModal] = useState(false);

    const handleConfirmDelete = () => {
        setOpenModal(false);
    }

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles['content-page']}>
                <h1>
                    Nome da loja
                </h1>
                <Outlet />
            </div>

            <ConfirmModal
                open={openModal}
                handleClose={() => setOpenModal(false)}
                handleConfirm={handleConfirmDelete}
            />
        </div>
    );
}

export default HeaderLayout;