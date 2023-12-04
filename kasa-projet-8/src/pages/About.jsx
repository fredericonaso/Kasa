import ImageSource2 from '../assets/Image source 2.png'
import '../components/style/about.scss'
import Dropdown from '../components/dropdownEle';

export default function About() {
    const option = [
        { id: 1, label: 'FIabilité', value: 'option_1' },
        { id: 2, label: 'Respect', value: 'option_2' },
        { id: 3, label: 'Service', value: 'option_3' },
        { id: 4, label: 'Sécurité', value: 'option 4' },
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