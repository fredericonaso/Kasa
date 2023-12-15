import React from 'react';
import '../components/style/PagesSCSS/housing.scss';
import logementsData from '../logements.json';
import Carousel from '../components/Carousel';
import TagName from '../components/tag';
import Dropdown from '../components/dropdownEle';
import StarRating from '../components/SatrRanting';
import { useParams } from "react-router-dom";
import Error from './NoPage';


const Housing = () => {
    // Récupération de l'ID de l'URL avec useParams de React Router
    let { id } = useParams();

    // Filtrage des données du fichier JSON pour obtenir le logement correspondant à l'ID
    const selectedLogement = logementsData.find(logement => logement.id === id);

    if (!selectedLogement) {
        return <Error />; // Affichage si aucun logement correspondant à l'ID n'est trouvé
    }


    return (
        <>
            <section className='housing-main'>
                <Carousel images={selectedLogement.pictures} />
                <div className="housing-details" key={selectedLogement.id}>
                    <h2 className='title'>{selectedLogement.title}</h2>
                    <span className='location'>{selectedLogement.location}</span>
                    <div className='housing-details-proprio'>
                        <span>{selectedLogement.host.name}</span>
                        <img src={selectedLogement.host.picture} alt="" />
                    </div>
                    <div>
                        <div className='housing-details-tags-rating'>
                            <div className='tags'>
                                {selectedLogement.tags.map((tag, index) => (
                                    <TagName key={index} tags={tag} />
                                ))}
                            </div>
                            <StarRating rating={parseInt(selectedLogement.rating)} className='rating' size='40px' />
                        </div>
                    </div>
                    <div className='housing-details-dropdowns'>
                        <Dropdown label="Description" content={selectedLogement.description} />
                        <Dropdown label="Équipements" content={selectedLogement.equipments} />
                    </div>
                </div >
            </section>
        </>
    );
};

export default Housing;
