import React from 'react'
import Counter from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';

export default function Item(props) {

      
  return (
    <>
          <Card  className='col-3 m-2 p-2 card-producto '>
            <Card.Img className='p-3 img-fluid imgProduct' src={props.imagen}  />
            <Card.Body className='cardBody p-2' >
              <Card.Title className="text-light fw-lighter" >{props.categoria}: <br/> {props.nombre} </Card.Title>
              <Card.Text className="fw-bold fs-3 text-light">
                  ${props.precio}
              </Card.Text>
              <Counter initial={1} stock={props.stock}/>
            </Card.Body>
          </Card>
    </>
  )
}