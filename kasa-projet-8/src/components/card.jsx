

import './style/componentsSCSS/card.scss'



const card = (props) =>{
    return (
        <>
        <div className='card'>
            <div className='card-container'>
                <div className='shadow-overlay'></div>
                <img src={props.cover} alt={props.title} className='card-container-cover' />
                <div className='card-container-text'>
                    <span>{props.title}</span>
                </div>
            </div>

        </div>
        </>
    )
};
export default card