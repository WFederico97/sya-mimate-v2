import React from "react";
import { Col, Row, } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import './Footer.css'

export default function Footer() {

    return (
        <Container fluid className="py-5">
            <Row className="col-12 justify-content-evenly">
                <Col className="col-6 col-md-2 mb-3">
                    <h5 className="text-dark">Sitemap</h5>
                    <div className="row">
                        <Link to={'/'} className='text-warning '>Home</Link>
                        <Link to={'/categoria/Mates'} className='text-warning '>Mates</Link>
                        <Link to={'/categoria/Bombillas'} className='text-warning '>Bombillas</Link>
                        <Link to={'/categoria/Yerbas'} className='text-warning '>Yerbas</Link>
                        <Link to={'/categoria/Termos'} className='text-warning '>Termos</Link>
                        <Link to={'/categoria/Accesorios'} className='text-warning '>Accesorios</Link>
                    </div>
                </Col>
                <Col className="col-6 col-md-2 mb-3 d-block">
                    <h5 className="text-dark">Contacto</h5>
                    <div className="col-md-5 offset-md-1 mb-3 text-light ">
                        <div className="socialMedia  ">
                            <BsInstagram className="me-2 " /> Instagram
                            
                        </div>
                        <div className="socialMedia ">
                            <BsFacebook className="me-2 " />
                            <p>  Facebook </p>
                        </div>
                        <div className="socialMedia ">
                            <BsWhatsapp className="me-2 "  />
                            <p>  Whatsapp </p>
                        </div>

                    </div>
                </Col>
            </Row>
        </Container>
    )
}