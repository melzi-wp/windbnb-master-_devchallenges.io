import React from 'react';
import '../styles/StayCardStyle.css';


const StayCard = (props) => {
    return (
        <div className='card'>
            <img className='img_card' src={props.imgsrc} alt="image" />
            <div className='header_card'>
                <h2 className={props.super_host ? ".header_card h2" : "super_host_none"}>{props.super_host}</h2>
                <p>{props.titel_img}</p>
                <div className='stars_card'>
                    <i></i>
                    <p>{props.stars_num}</p>
                </div>
            </div>
            <h1>{props.title_card}</h1>
        </div>
    );
};

export default StayCard;