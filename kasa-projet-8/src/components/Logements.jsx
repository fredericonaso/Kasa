
import Logements from '../logements.json';
import './style/logements.scss';

const HousingGallery = () => {
    return(
        Logements && Logements.map (logement => {
            return(
                <div className='housingCard' key={logement.id}>
                    <img src={logement.cover} alt="" className='housingCard-cover'/>
                    <div className='housingCard-container'>
                       <span>{logement.title}</span> 
                    </div>
                </div>

            )

        })
    );

}
export default HousingGallery;