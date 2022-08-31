import React, { useState } from "react";
import Counter from "../ItemCount/ItemCount";
import { Accordion, Modal, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { IoArrowBackCircle } from "react-icons/io5";
import Container from "react-bootstrap/esm/Container";
import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import './ItemDetail.css'

export default function ItemDetail(props) {
  const [irAlCarrito, setearCarrito] = useState(false);
  const { addProducto } = useCartContext();
  const [smShow, setSmShow] = useState(false)

  const showModal = () => {
    setSmShow(true);
    setTimeout(() => {
      setSmShow(false)
    }, 2000)
  }

  function agregarProducto(cantidad) {
    setearCarrito(true);
    addProducto(props, cantidad);
  }
  return (
    <Container fluid='md'>
      <Row>
        <div>
          <Link to="/" id="backButton">
            <IoArrowBackCircle />
          </Link>
        </div>
        <Col>
          <img src={props.imagen} alt={props.nombre} className='img-fluid detailProductImg' />
        </Col>
        <Col className="productDetailHeader" >
          <h5>{props.categoria}</h5>
          <h1>{props.nombre}</h1>
          <hr />
          <div className="price">
            <div className="price__data">
              <h2>{`$ ${props.precio}`}</h2>
            </div>
            <h6>En stock: {props.stock} unidades</h6>
          </div>
          {irAlCarrito ? (
            <div className=" col-12  mx-auto ">
              <Row>
                <Col xl={6}>
                  <Link to="/cart">
                    {" "}
                    <Button variant="outline-primary" className=" col-12 ">
                      Ir al carrito
                    </Button>{" "}
                  </Link>
                </Col>
                <Col xl={6}>
                  <Link to="/">
                    {" "}
                    <Button variant="outline-success" className="col-12 ">
                      Continuar Comprando
                    </Button>{" "}
                  </Link>
                </Col>
              </Row>

            </div>
          ) : (
            <Counter initial={1} stock={props.stock} onAdd={agregarProducto} onAddShowModal={showModal} />
          )}
          <div className="mt-3">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header className="fw-bolder">Descripción</Accordion.Header>
                <Accordion.Body>{props.descripcion}</Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
          <Modal
            size="m"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
          >
            <Modal.Body>
              Has agregado <span>{props.nombre}</span> a tu carrito
            </Modal.Body>
          </Modal>
        </Col>
      </Row>
    </Container>
  )
}
