import React from 'react'
import './Item.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import { Link } from 'react-router-dom';


export default function Item(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, );

  return (
    <>
      <Container fluid="xl" className=' w-50 col-md-6 m-auto p-auto d-flex row mx-auto justify-content-center'>
        <div className="row flex col-xl-12 mb-2 ">
          <div className="col-sm">
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative cardItem">
              <div className="col p-4 d-flex flex-column position-static">
                <strong className="d-inline-block mb-2 fs-4 text-dark">{props.categoria}</strong>
                <h3 className="mb-0 cardTittle">{props.nombre}</h3>
                <p className="card-text mb-auto p-1 fs-5 cardText">{props.descripcion}</p>
                <Link to={`/item/${props.id}`}>
                  <Button variant='btn  btn-primary flex btnCarrito mx-auto row col-6'>Ver detalles</Button>
                </Link>
              </div>
              <div className='col-auto  d-lg-flex'>
                <img src={props.imagen} alt='product img' className='img-fluid imagenProducto ' />

              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
