import ErrorLogo from '../assets/404.png'
import '../components/style/error.scss'
import { Link } from 'react-router-dom';




const Error = () => {
    return(
       <> <ErrorLogo />
        <span>Oups! La page que vous demandez n'existe pas.</span>
        <Link to='/' className='backToHome'>Retournez sur la page d'accueil</Link>
        </>
    );
}
export default Error