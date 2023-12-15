import React from 'react';
import { FaStar } from 'react-icons/fa';
import './style/componentsSCSS/stars.scss'

const StarRating = ({ rating }) => {
    const starsTotal = 5;

    let stars = [];
    for (let i = 0; i < starsTotal; i++) {
        if (i < rating) {
            stars.push(<FaStar key={i} color="#FF6060" />);
        } else {
            stars.push(<FaStar key={i} color="#ccc" />);
        }
    }

    return <div className='stars'>{stars}</div>;
};

export default StarRating;
