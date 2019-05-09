import React from 'react';
import './Card.css';
import CardBanner from './CardBanner';
import CardContent from './CardContent'; 

const CardContainer = () => {
    return <div className="card">
        <a href="https://www.reactjs.org">
        <CardBanner />
        </a>
            <CardContent />

    </div>
};

export default CardContainer;