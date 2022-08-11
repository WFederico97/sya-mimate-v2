import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import './IntroHome.css'
import 'animate.css';


export default function SaludoHome() {
    return (
        <>
            <div className=" d-flex row col-xl-12">
                <div className="home-saludo text-warning">
                <h1 className="text-warning fw-bold">Bienvenido a SyA MiMate</h1>
                <h4 className="p-home animate__animated animate__fadeInLeft">
                    Somos un emprendimiento joven dedicado a la venta de productos para el
                    mate, buscando ofrecer gran variabilidad y accesibilidad para todos
                    los gustos. Fieles convencidos de que la felicidad está en el contacto
                    humano y qué mejor que unos buenos mates para compartir momentos !
                </h4>
                </div>
                <div className="carrouselHome">
                <Carousel fade className="container-fluid block col-md-5 ">
                    <Carousel.Item className="col-12">
                        <img
                            className="d-block mx-auto img-fluid col-12"
                            src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756968/Images/carrouselMate1_a43379.jpg'
                            alt="Mates imperiales"
                            style={{ height: "25em", width: "25em", borderRadius: "20%" }}
                        />
                        <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                            <h3 className="text-warning carouselCaption">Imperiales</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="col-12">
                        <img
                            className="d-block mx-auto img-fluid col-12"
                            src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659758560/Images/carrouselMateCamionero.jpg'
                            alt="Mates Camioneros"
                            style={{ height: "25em", width: "25em", borderRadius: "20%" }}
                        />
                        <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                            <h3 className="text-warning carouselCaption">Camioneros</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="col-12">
                        <img
                            className="d-block mx-auto img-fluid col-12"
                            src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659758559/Images/carrouselMateEco.jpg'
                            alt="Mates Económicos"
                            style={{ height: "25em", width: "25em", borderRadius: "20%" }}
                        />
                        <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                            <h3 className="text-warning carouselCaption">Linea Económica</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="col-12">
                        <img
                            className="d-block mx-auto img-fluid col-12"
                            src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659758560/Images/carrouselMateTorpedo.webp'
                            alt="Mates Torpedos"
                            style={{ height: "25em", width: "25em", borderRadius: "20%" }}
                        />
                        <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                            <h3 className="text-warning carouselCaption">Torpedos</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="col-12">
                        <img
                            className="d-block mx-auto img-fluid col-12"
                            src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659758565/Images/carrouselYerbas.jpg'
                            alt="Yerbas"
                            style={{ height: "25em", width: "25em", borderRadius: "20%" }}
                        />
                        <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                            <h3 className="text-warning carouselCaption">Yerbas</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="col-12">
                        <img
                            className="d-block mx-auto img-fluid col-12"
                            src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756983/Images/carrouselTermo_lko4k1.jpg'
                            alt="Termos"
                            style={{ height: "25em", width: "25em", borderRadius: "20%" }}
                        />
                        <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                            <h3 className="text-warning carouselCaption ">Termos</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item className="col-12">
                        <img
                            className="d-block mx-auto img-fluid col-12"
                            src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659757012/Images/yerberaRojaAccesorio_zlcl1a.jpg'
                            alt="Accesorios"
                            style={{ height: "25em", width: "25em", borderRadius: "20%" }}
                        />
                        <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                            <h3 className="text-warning carouselCaption ">Accesorios</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item >
                        <img
                            className="d-block mx-auto img-fluid col-12"
                            src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756966/Images/carrouselBombilla_shx7np.jpg'
                            alt="first slide"
                            style={{ height: "25em", width: "25em", borderRadius: "20%" }}
                        />
                        <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                            <h3 className="text-warning carouselCaption">Bombillas</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
            </div>
        </>
    );
}
