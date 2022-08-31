import React, { useState, useEffect } from "react";
import CartItem from "./CartItem/CartItem";
import { useCartContext } from "../../context/CartContext";
import './Cart.css'
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'
import { Col, Row, Container } from "react-bootstrap";
import Card from 'react-bootstrap/Card';
import 'animate.css'
import { FaApplePay, FaAmazonPay, FaCcMastercard, FaCcPaypal, FaCcDinersClub, FaCcVisa } from 'react-icons/fa'
import ModalConfirmarCompra from "../Modal/Modal";
import { collection, getFirestore } from "firebase/firestore";

const Cart = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const { cart, precioFinal, addProducto} = useCartContext();

    return (
        <>
            {
                (cart.length === 0) ?
                    <div className="w-auto shadow-lg rounded d-flex row animate__animated animate__fadeInDown animate__fast">
                        <img className="img-fluid mx-auto mb-4  " style={{ height: '15em', width: '12em' }} src="https://res.cloudinary.com/dwyqyqadz/image/upload/v1661901182/Images/365cons-257_xklr45.png" alt="no cart item" />
                        <h3 className="text-dark text-center bg-warning">No hay productos en tu carrito, por favor , haga click en el boton debajo para volver al catálogo </h3>
                        <Link to={'/'}>
                            <Button className="btn btn-info col-12">Volver al catálogo</Button>
                        </Link>
                    </div>
                    :
                    <Container fluid>
                        <Row>
                            <Col className="productCheckout">
                                {
                                    cart.map((producto) => {
                                        return (
                                            <Card className="cardProductCheckout mb-3">
                                                <CartItem key={producto.id} producto={producto} />
                                            </Card>

                                        )
                                    })
                                }
                            </Col>
                            <Col>
                                <Card className="cartTotal">
                                    <div>
                                    <h4 className=" fw-bolder text-center fs-1" >Total: ${precioFinal()}</h4>
                                    </div>

                                    <Row>
                                        <Col >
                                            <FaCcVisa className="Icon " /> <FaCcMastercard className="Icon  " /> <FaCcPaypal className="Icon  " /> <FaCcDinersClub className="Icon  " /> <FaAmazonPay className="Icon  " /> <FaApplePay className="Icon  " />
                                        </Col>
                                    </Row>
                                    <Button disabled={cart.length === 0} onClick={handleShow} className="btn btn-info col-12 mt-3">Checkout</Button>
                                </Card>
                            </Col>
                        </Row>
                        <ModalConfirmarCompra handleClose={handleClose} show={show} />
                    </Container>

            }

        </>
    )
}

export default Cart