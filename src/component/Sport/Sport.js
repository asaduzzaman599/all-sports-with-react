import React from 'react';
import "./Sport.css";

const Sport = (props) => {
    console.log(props)
    const {strSport,strSportDescription,strSportIconGreen,strSportThumb} = props.sport;
    return (
        <div className='sport'>
            <img className='thumbnail' src={strSportThumb} alt="" />
            <div className='text-content'>
            <img className='icon' src={strSportIconGreen} alt="" />
            <h3>{strSport}</h3>
            <p>{strSportDescription.length<70?strSportDescription:strSportDescription.slice(0,70)+" ...More"}</p>
            </div>
        </div>
    );
};

export default Sport;