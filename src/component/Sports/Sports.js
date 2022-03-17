import React, { useEffect, useState } from 'react';
import Sport from '../Sport/Sport';
import './Sports.css'

const Sports = () => {
    const [sports,setSports] = useState([]);

    useEffect(()=>{
        const url = `https://www.thesportsdb.com/api/v1/json/2/all_sports.php`;

        fetch(url)
        .then(res=> res.json())
        .then(data => setSports(data.sports))
    },[]);
    return (
        <div className='sports'>
            {
                sports.map(sport => <Sport key={sport.idSport} sport={sport}></Sport>)
            }
        </div>
    );
};

export default Sports;