import React from "react";
import { Col, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import { BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
    return (
        <div className="container mx-auto  footer col-6  row">
            <Col className="sitemap fs-6">
                <div>
                    <h6 className="text-dark fs-5 fw-bold">Sitemap</h6>
                </div>
                <Link to={"/"} className="text-warning ">
                    Home
                </Link>
                <Link to={"/categoria/Mates"} className="text-warning ">
                    Mates
                </Link>
                <Link to={"/categoria/Bombillas"} className="text-warning ">
                    Bombillas
                </Link>
                <Link to={"/categoria/Yerbas"} className="text-warning ">
                    Yerbas
                </Link>
                <Link to={"/categoria/Termos"} className="text-warning ">
                    Termos
                </Link>
                <Link to={"/categoria/Accesorios"} className="text-warning ">
                    Accesorios
                </Link>
            </Col>
            <Col >
                <div>
                    <h6 className="text-dark fs-5 fw-bold">Social Media</h6>
                </div>
                <div className="socialMedia  ">

                    <p className="text-light fs-6">
                        {" "}
                        <a
                            className="text-light"
                            rel="noopener noreferrer"
                            href="https://www.instagram.com/sya.mimate/"
                            target="_blank"
                        >
                            <BsInstagram className=" socialMediaIconInstagram  " />
                        </a>{" "}
                        Instagram
                    </p>
                    <p className="text-light fs-6">
                        {" "}
                        <a
                            className="text-light"
                            rel="noopener noreferrer"
                            href="https://www.facebook.com/sya.mimate"
                            target="_blank"
                        >
                            <BsFacebook className=" socialMediaIconFacebook  " />
                        </a>{" "}
                        Facebook
                    </p>
                    <p className="text-light fs-6">
                        {" "}
                        <a
                            className="text-light"
                            rel="noopener noreferrer"
                            href="https://api.whatsapp.com/send?phone=+5493515993377&text=Hola,%20me%20interesan%20sus%20productos%20,%20¿puedo%20ver%20el%20catalogo?."
                            target="_blank"
                        >
                            <BsWhatsapp className=" socialMediaIconWhatsapp  " />
                        </a>{" "}
                        Whatsapp
                    </p>
                </div>
            </Col>
            <hr></hr>
            <div className="trademark">
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/federico-wuthrich-668633164/" ><p class="text-center  text-dark"> Designed by Federico</p></a>
            </div>
        </div>

    );
}
