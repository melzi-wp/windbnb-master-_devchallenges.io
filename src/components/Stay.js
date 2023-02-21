import React from 'react';
import StayCard from './StayCard.js';
import StayCardData from './StayCardData.js';
import '../styles/StayStyle.css';

const Stay = () => {
    return (
        <div className=''>
            <div className='stays-container'>
                { StayCardData.map((val, ind) =>{
                    return(
                        <StayCard
                        key={ind}
                        imgsrc={val.imgsrc}
                        super_host={val.super_host}
                        titel_img={val.titel_img}
                        stars_num={val.stars_num}
                        title_card={val.title_card}
                        />
                    )
                }) }
            </div>
        </div>
    );
};

export default Stay;