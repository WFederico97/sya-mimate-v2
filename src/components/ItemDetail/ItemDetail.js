import React, { useState } from 'react';
import Counter from '../ItemCount/ItemCount'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/esm/Container';


export default function ItemDetail({ imagen, nombre, precio, stock }) {

  return (
    <Container fluid className='col-4 m-auto p-auto d-flex row mx-auto justify-content-center'>
      <div className="row flex col-12 mb-2 ">
        <div className="col-sm ">
          <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 justify-content-center position-relative cardItem">
            <div className="col p-4 d-flex flex-column position-static">
              {/* <strong className="d-inline-block mb-2 fs-4 text-dark">{categoria}</strong> */}
              <h3 className="mb-0 cardTittle">{nombre}</h3>
              <p className="card-text mb-auto p-1 fs-1 cardText">${precio}</p>
            </div>
            <div className="col-auto  d-lg-flex">
              <img src={imagen} alt='product img' className='img-fluid imagenProducto ' />
            </div>
            <Counter  initial={1} stock={stock} />
            <span className=' fs-3 text-center text-warning fw-bold'>Stock disponible : {stock}</span>
          </div>
        </div>
      </div>
    </Container>




  )
}