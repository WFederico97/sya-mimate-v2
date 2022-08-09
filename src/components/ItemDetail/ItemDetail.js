import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import React from 'react'
import Counter from '../ItemCount/ItemCount'

const cargarImagen = require.context("../../../public/Images", true);
const productoAñadido = () => {
    return (
        alert("Producto agregado")
    )
}


export default function ItemDetail({ nombre, precio, stock, imagen }) {

    return (
        <div className='product-detail container flex row justify-content-center col-12'>
          <Card data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="500" className='col-3 m-2 p-2 card-producto '>
            <Card.Img className='p-3 img-fluid shadow p-3 mb-5 bg-body rounded imgProduct' style={{width:'18em', height:'18em'}}  src={cargarImagen(`${imagen}`)}  />
            <Card.Body className='cardBody p-2' >
              <Card.Title className="text-light fw-lighter" > {nombre} </Card.Title>
              <Card.Text className="fw-bold fs-3 text-light">
                  ${precio}
              </Card.Text>
              <Counter initial={1} stock={stock}/>
              <Button  onClick={productoAñadido()} variant='btn  btn-primary btnCarrito mx-auto row col-12'>Agregar al carrito</Button>
            </Card.Body>
          </Card>

        </div>
    )
}