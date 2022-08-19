import React from 'react'
import './Item.css'
import Button from 'react-bootstrap/Button';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Card, Col } from 'react-bootstrap';


export default function Item(props) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  });

  return (
    <>
      <Col data-aos="fade-up" className='containerProduct d-flex row col-xl-3  text-light'>
        <div className='productItem m-3'>
          <Card.Img variant='top' className='productImg img-fluid' src={props.imagen} alt={props.nombre} />
          <Card.Body className='productItemBody'>
            <Card.Header className='productHeader '>{props.categoria}</Card.Header>
            <Card.Title className='productTittle '>{props.nombre}</Card.Title>
            <Card.Text className='productFooter text-end'>${props.precio}</Card.Text>
          </Card.Body>
          <Link to={`/item/${props.id}`} >
            <Button variant=' btn btn-primary w-100 py-4 mb-2 '>Ver detalles</Button>
          </Link>
        </div>

      </Col>
    </>
  )
}
