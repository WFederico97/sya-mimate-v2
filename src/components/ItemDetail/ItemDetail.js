import Card from 'react-bootstrap/Card';
import React from 'react'
import Counter from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';

export default function ItemDetail({imagen, nombre, precio, stock}) {
  const productoAñadido = () => {
    return (
        alert("Producto agregado")
    )
}
    return (
        <div className='product-detail container-flex row justify-content-center col-12'>
          <Card data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="500" className='col-6 mx-auto m-2 p-2 card-producto '>
            <Card.Img className='p-3 img-fluid shadow p-3 mb-5 mx-auto bg-body rounded imgProduct' style={{width:'18em', height:'18em'}}  src={imagen}  />
            <Card.Body className='cardBody p-2 mx-auto' >
              <Card.Title className="text-light fw-lighter" > {nombre} </Card.Title>
              <Card.Text className="fw-bold fs-3 text-light">
                  ${precio}
              </Card.Text>
              <Counter initial={1} stock={stock}/>
              <Button variant='btn  btn-primary btnCarrito mx-auto row '>Agregar al carrito</Button>
            </Card.Body>
          </Card>

        </div>
    )
}