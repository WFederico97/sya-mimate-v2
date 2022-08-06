import React from 'react'
import Counter from '../ItemCount/ItemCount';
import Card from 'react-bootstrap/Card';
import './Item.css'
import Button from 'react-bootstrap/Button';

export default function Item(props) {
    function agregarProducto () {
        return(
          alert('¡Producto Agregado!')
        );
      }
      
      const cargarImagen = require.context("../../../public/Images", true);
      
  return (
    <>
          <Card  className='col-3 m-2 p-2 card-producto '>
            <Card.Img className='p-3 img-fluid shadow p-3 mb-5 bg-body rounded imgProduct' style={{width:'18em', height:'18em'}}  src={cargarImagen(`${props.imagen}`)}  />
            <Card.Body className='cardBody p-2' >
              <Card.Title className="text-light fw-lighter" >{props.categoria}: <br/> {props.nombre} </Card.Title>
              <Card.Text className="fw-bold fs-3 text-light">
                  ${props.precio}
              </Card.Text>
              <Counter initial={1} stock={props.stock}/>
              <Button  onClick={agregarProducto} variant='btn  btn-primary btnCarrito mx-auto row col-12'>Agregar al carrito</Button>
            </Card.Body>
          </Card>
    </>
  )
}
