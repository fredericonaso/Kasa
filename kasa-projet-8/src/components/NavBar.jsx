

import './style/componentsSCSS/Navbar.scss';
import logoNavbar from '../assets/logo.png';
import { Link } from 'react-router-dom';



const NavBar = () => {
    return (
        <div className="nav-bar">
            <img alt='kasa-logo' src={logoNavbar} className='logo-kasa' />
            <div className="nav-bar-links">
                <Link to="/">Acceuil</Link>
                <Link to="/About">A Propos</Link>
            </div>
        </div>
    );
}
export default NavBar