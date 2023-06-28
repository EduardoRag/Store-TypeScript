import { Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import styles from './styles.module.scss';

function HeaderLayout() {
    return (
        <div className={styles.container}>
            <Header />
            <div className={styles['content-page']}>
                <h1>
                    Nome da loja
                </h1>
                <Outlet />
            </div>
        </div>
    );
}

export default HeaderLayout;