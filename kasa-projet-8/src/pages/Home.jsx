import "../components/style/home.scss"
import ImageSource1 from '../assets/Image_source_1.png';

const Home = () => {
    return (
        <div className="carousel-ac">
            <div className="carousel-ac-img"><img src={ImageSource1} alt="bannière"/></div>
            <span className="carousel-ac-slogan">Chez vous, partout et ailleurs</span> 
        </div>
    );
}
export default Home;