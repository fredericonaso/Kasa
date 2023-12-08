import '../components/style/PagesSCSS/housing.scss'
import logementsData from '../logements.json'
import { Carousel } from 'react-responsive-carousel'
import TagName from '../components/tag'
import Dropdown from '../components/dropdownEle'


const Housing = () => {
    return (
        <>
            {logementsData && logementsData.map(logement => (
                      <><Carousel>
                    <div>
                        <img key={logement.id} src={logement.pictures} alt="" />
                    </div>
                    <div>
                        <img key={logement.id} src={logement.pictures} alt="" />
                    </div>
                    <div>
                        <img key={logement.id} src={logement.pictures} alt="" />
                    </div>
                    <div>
                        <img key={logement.id} src={logement.pictures} alt="" />
                    </div>
                </Carousel>
                <div>
                    <p key={logement.id}>{logement.description}</p>
                    <span key={logement.id}>{logement.location}</span>
                    <div>
                        <img key={logement.id} src={logement.host.picture} alt="" />
                        <span key={logement.id}>{logement.host.name}</span>
                    </div>
                </div>
                <div>
                    <div>
                        <TagName key={logement.id} tags={logement.tags} />
                    </div>
                    <div key={logement.id}>{logement.rating}</div>
                </div>
                <div>
                    <Dropdown key={logement.id} label="equipements" content={logement.equipments} />
                    <Dropdown key={logement.id} label="description" content={logement.description} />
                </div>
                </>
            
            ))}
        </>
    );
}
export default Housing