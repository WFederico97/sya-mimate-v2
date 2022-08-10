import Card from 'react-bootstrap/Card';
import React, { useState } from 'react';
import Counter from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';


export default function ItemDetail({ imagen, nombre, precio, stock }) {
  const agregarProducto = () => {
    return (
      alert("¡Producto(s) Agregado(s) !")
    )
  }
  return (
    <Container fluid className='col-4 m-auto p-auto d-flex row mx-auto justify-content-center'>
      <div class="row flex col-12 mb-2 ">
        <div class="col-sm ">
          <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 justify-content-center position-relative cardItem">
            <div class="col p-4 d-flex flex-column position-static">
              {/* <strong class="d-inline-block mb-2 fs-4 text-dark">{categoria}</strong> */}
              <h3 class="mb-0 cardTittle">{nombre}</h3>
              <p class="card-text mb-auto p-1 fs-1 cardText">${precio}</p>
            </div>
            <div class="col-auto  d-lg-flex">
              <img src={imagen} alt='product img' className='img-fluid imagenProducto ' />
            </div>
            <Counter  initial={1} stock={stock} />
            <span className=' fs-3 text-center text-warning fw-bold'>Stock disponible : {stock}</span>
            <Button onClick={agregarProducto}  variant='btn btn-info'>Agregar producto</Button>
          </div>
        </div>
      </div>
    </Container>




  )
}