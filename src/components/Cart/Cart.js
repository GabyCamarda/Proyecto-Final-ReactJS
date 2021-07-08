import React, { useContext } from 'react';
import { Card, Image } from 'semantic-ui-react'
import './Cart.css';
const Cart = ({ data }) => {
  
  return (    
        <div className="CartList container">
             
              <Card style={{ width: 200 }} key={data.id}>
                <Image src={data.image} wrapped ui={false} />
                <Card.Content>
                  <Card.Header>{data.title}</Card.Header>
                  <Card.Meta>
                    <span className='date'>{data.price}</span>
                  </Card.Meta>
                  <Card.Description>Descripción: {data.description}</Card.Description>
                </Card.Content>
                                                        
              </Card> 
        </div>
    )
}

export default Cart