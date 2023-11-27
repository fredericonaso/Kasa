

import './style/footer.scss'
import logo from '../assets/logo.svg';


const Footer = () => {
    return (
        <div ClassName="footer">
            <img alt="kasa-logo" src={logo} ClassName="footer-logo"/>
            <span ClassName="footer-text">© 2020 Kasa. All rights reserved</span>
        </div>
    );
}
export default Footer    