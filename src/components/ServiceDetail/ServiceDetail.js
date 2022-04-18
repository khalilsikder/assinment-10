import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const{serviceId}=useParams();
    const[service,setService] =useState({})
    useEffect(()=>{
        const url=`data.json/${service}`
        console.log(url);
        fetch(url)
        .then(res=>res.json())
        .then(data=>setService(data))
    },[])
    return (
        <div>
            <h2>{serviceId}</h2>
            <p>image{service.img}</p>
            <p>name:{service.name}</p>
            <p>price:{service.price}</p> 
        </div>
    );
};

export default ServiceDetail;