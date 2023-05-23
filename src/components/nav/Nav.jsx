import styles from './Nav.module.css'
import SearchBar from '../searchBar/SearchBar';
import { NavLink } from 'react-router-dom';

export default function Nav({ onSearch, setAccess }) {
    const handleLogOut = () => {
        setAccess(false);
    }

    return (
        <div className={styles.divNav}>
            <nav className={styles.navBar}>
                <NavLink to='/home'><button>Home</button></NavLink>
                <NavLink to='/favorites'><button>Favorites</button></NavLink> 
                <NavLink to='/about'><button>About</button></NavLink>
                <NavLink><button onClick={handleLogOut}>Log Out</button></NavLink>
                <SearchBar onSearch={onSearch} />
            </nav>
        </div>
    )
}