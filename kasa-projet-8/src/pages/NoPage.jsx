import ErrorLogo from '../assets/404.png'
import '../components/style/PagesSCSS/error.scss'
import { Link } from 'react-router-dom';




const Error = () => {
    return (
        <>
            <div className='NoPageMain'>
                <img src={ErrorLogo} alt="" />
                <span>Oups! La page que vous demandez n'existe pas.</span>
                <Link to='/' className='backToHome'>Retournez sur la page d'accueil</Link>
            </div>
        </>
    );
}
export default Error