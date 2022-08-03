import React from 'react'
import Counter from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import './Item.css'
import Button from 'react-bootstrap/Button';

export default function Item(props) {
    function mostrarDescr () {
        return(
          alert('¡Sitio en construccion!')
        );
      }
      
  return (
    <>
          <Card  className='col-3 m-2 p-2 card-producto '>
            <Card.Img className='p-3 img-fluid imgProduct' src={props.imgUrl} style={{width:'3rem', height: '3rem'}} />
            <Card.Body className='cardBody p-2' >
              <Card.Title className="text-light fw-lighter" >{props.categoria}: <br/> {props.nombre} </Card.Title>
              <Card.Text className="fw-bold fs-3 text-light">
                  ${props.precio}
              </Card.Text>
              <Counter initial={1} stock={props.stock}/>
              <Button  onClick={mostrarDescr} variant='btn  btn-primary btnCarrito m-3'>Ver descripcion de producto</Button>
            </Card.Body>
          </Card>
    </>
  )
}
