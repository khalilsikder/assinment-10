import './Service.css'
import React, { useState } from 'react';
import { useEffect } from 'react';
import ServiceDetail from '../ServiceDetail/ServiceDetail';


const Service = () => {
  const[service,setService]=useState([])
  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setService(data))
  },[])
  return (
    <div className='services'>
      {
        service.slice(0,4).map(service=><ServiceDetail key={service.id} service={service}></ServiceDetail>)
      }
    </div>
  );
};

export default Service;