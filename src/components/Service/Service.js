import React from 'react';
import { useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card'
import { CardGroup } from 'react-bootstrap';

const Service = (props) => {
console.log(props);

const{name,img,price,Id}=props.Service
const navigate=useNavigate();
const showServiceDetails=()=>{
    const path=`/service/${Id}`
    navigate(path);
}
    return (
        <div> 
<CardGroup>
  <Card>
    <Card.Img variant="top" src={img} />
    <Card.Body>
      <Card.Title>name:{name}</Card.Title>
      <Card.Text>
      <button onClick={showServiceDetails}>{name} id:{Id}</button>
      </Card.Text>
      <p>price:{price}</p>
    </Card.Body>
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
    
  </Card>
  <Card>
    <Card.Img variant="top" src="holder.js/100px160" />
    <Card.Body>
      <Card.Title>Card title</Card.Title>
      <Card.Text>
        
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>

            
        </div>
    );
};

export default Service;