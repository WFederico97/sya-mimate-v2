import React from 'react'
import Card from 'react-bootstrap/Card';
import './Item.css'
import Button from 'react-bootstrap/Button';
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'
import { Link } from 'react-router-dom';

export default function Item(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
      
      const cargarImagen = require.context("../../../public/Images", true);
      
  return (
    <>
          <Card data-aos="fade-up" data-aos-easing="ease-in-out" data-aos-delay="500" className='col-3 m-2 p-2 card-producto '>
            <Card.Img className='p-3 img-fluid shadow p-3 mb-5 bg-body rounded imgProduct' style={{width:'18em', height:'18em'}}  src={cargarImagen(`${props.imagen}`)}  />
            <Card.Body className='cardBody p-2' >
              <Card.Title className="text-dark fs-3 fw-bolder text-wrap" >{props.nombre} </Card.Title>
              <Card.Text className="fw-bold fs-6 text-white">
                  {props.descripcion}
              </Card.Text>
              {/* <Counter initial={1} stock={props.stock}/> */}
              <Link to={`/item/${props.id}`}>
                  <Button  variant='btn  btn-primary btnCarrito mx-auto row col-12'>Ver detalles</Button>
              </Link>

            </Card.Body>
          </Card>
    </>
  )
}
