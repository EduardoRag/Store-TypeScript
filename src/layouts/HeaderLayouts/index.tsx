import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import styles from './styles.module.scss';
import ConfirmModal from '../../components/ModalConfirm';
import useGlobalContext from '../../hooks/useGlobalContext';

function HeaderLayout() {
    const {
        openModal,
        handleConfirmModal,
        handleCloseModal
    } = useGlobalContext();
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
                handleClose={handleCloseModal}
                handleConfirm={handleConfirmModal}
            />
        </div>
    );
}

export default HeaderLayout;