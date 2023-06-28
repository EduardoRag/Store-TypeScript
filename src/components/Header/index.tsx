import styles from './styles.module.scss';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header className={styles.header}>
            <Link to='/main'>
                <img
                    src={Logo}
                    alt='Logo'
                />
            </Link>
        </header>
    )
}

export default Header;