import "../components/style/PagesSCSS/home.scss"
import ImageSource1 from '../assets/Image_source_1.png';
import Cards from '../components/card'
import logementsData from '../logements.json';
import { Link } from "react-router-dom";


function Home() {
    return (
        <>
            <div className="carousel-ac">
                <div className="carousel-ac-img"><img src={ImageSource1} alt="bannière" /></div>
                <span className="carousel-ac-slogan">Chez vous, partout et ailleurs</span>
            </div>
            <section className="housing">
                <div className='housingGallery'>
                    {logementsData && logementsData.map(logement => (
                        <Link to={`/Housing/${logement.id}`} className="card" key={logement.id}><Cards key={logement.id} cover={logement.cover} title={logement.title} /></Link>
                    ))}

                </div>
            </section>
        </>
    );
}
export default Home;