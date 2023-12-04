import './style/carousel.scss'

const Carousel = (props) =>{
    return(
        <div className="carousel">
        <div className="carousel-img"><img src={props.image} alt="bannière" /></div>
        <span className="carousel-slogan">{props.content}</span>
    </div>
    );
}
export default Carousel