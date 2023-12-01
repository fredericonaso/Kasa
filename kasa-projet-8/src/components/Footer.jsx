

import './style/footerBar.scss'
import logo from '../assets/logo.svg';


const Footer = () => {
    return (
        <div className="footer">
            <img alt="kasa-logo" src={logo} className="footer-logo"/>
            <span className="footer-text">© 2020 Kasa. All rights reserved</span>
        </div>
    );
}
export default Footer    