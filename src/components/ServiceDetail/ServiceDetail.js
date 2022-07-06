import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ServiceDetail.css'

const ServiceDetail = (props) => {
    const{name,price,img}=props.service;
    const navigate = useNavigate()
    return (
        <div className='services-btn'>
            <img src={img} alt="" />
            <p>name:{name}</p>
            <p>price:${price}</p>
            <button onClick={()=>navigate('/Checkout')}>add me</button>
            
        </div>
    );
};

export default ServiceDetail;