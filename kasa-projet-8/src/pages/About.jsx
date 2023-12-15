import ImageSource2 from '../assets/Image source 2.png'
import '../components/style/PagesSCSS/about.scss'
import Dropdown from '../components/dropdownEle';

export default function About() {
    const option = [
        { id: 1, label: 'FIabilité', value: 'Les annonces postées sur Kasa garantissent un fiabilité totale. Les photos sont conformes aux Logements, et toutes les informations sont régulièrement vérifié par nos equipes' },
        { id: 2, label: 'Respect', value: 'la bienveillance font parties des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera un exclusion de notre platforme.' },
        { id: 3, label: 'Service', value: 'la bienveillance font parties des valeurs fondatrice de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera un exclusion de notre platforme.' },
        { id: 4, label: 'Sécurité', value: "La Sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaques logements correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien a l'hôtes qu'au locataire, cela permet à nos equipes de vérifié que les standards sont bien respecté. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes " },
    ];
    return (
        <><div className="carousel-ap">
            <div className="carousel-ap-img"><img src={ImageSource2} alt="bannière" /></div>
        </div>
            <div className='Main'>
                {option && option.map(option => (
                    < Dropdown key={option.id} label={option.label} content={option.value} />
                ))}
            </div>
        </>

    );
}