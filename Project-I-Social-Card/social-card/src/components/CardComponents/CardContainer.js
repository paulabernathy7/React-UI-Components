import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent'; 

const CardContainer = () => {
    return <div>
        <a href="https://www.reactjs.org">
        <CardBanner />
        <div>
            <CardContent />
        </div>
        </a>
    </div>
};

export default CardContainer;