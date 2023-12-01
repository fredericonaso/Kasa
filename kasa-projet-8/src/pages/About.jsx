import ImageSource2 from '../assets/Image source 2.png'
import '../components/style/about.scss'

export default function About() {
    return (
        <><div className="carousel-ap">
            <div className="carousel-ap-img"><img src={ImageSource2} alt="bannière" /></div>
        </div>
            <div className='dropdown'>
                <div className='dropdown-element'>
                    Flabilité
                    <i></i>
                    <p></p>
                </div>
                <div className='fropdown-element'>
                    Respect
                    <i></i>
                    <p></p>
                </div>
                <div className='fropdown-element' >
                    Service
                    <i></i>
                    <p></p>
                </div>
                <div className='fropdown-element'>
                    Sécurité
                    <i></i>
                    <p></p>
                </div>
            </div>
        </>

    );
}