import React from "react"
import { Carousel } from "react-bootstrap"

export default function CarouselHome() {
    return (
        <Carousel fade className="productCarousel container-fluid block col-md-5 p-3 w-100 ">
            <Carousel.Item className="col-12">
                <img
                    className="d-block mx-auto img-fluid col-12 w-100"
                    src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756968/Images/carrouselMate1_a43379.jpg'
                    alt="Mates imperiales"
                    style={{ height: "40em", width: "35em",   }}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning carouselCaption">Imperiales</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="col-12">
                <img
                    className="d-block mx-auto img-fluid col-12 w-100"
                    src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659758560/Images/carrouselMateCamionero.jpg'
                    alt="Mates Camioneros"
                    style={{  height: "40em", width: "35em",  }}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning carouselCaption">Camioneros</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="col-12">
                <img
                    className="d-block mx-auto img-fluid col-12 w-100"
                    src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659758559/Images/carrouselMateEco.jpg'
                    alt="Mates Económicos"
                    style={{  height: "40em", width: "35em",  }}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning carouselCaption">Linea Económica</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="col-12">
                <img
                    className="d-block mx-auto img-fluid col-12 w-100"
                    src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659758560/Images/carrouselMateTorpedo.webp'
                    alt="Mates Torpedos"
                    style={{  height: "40em", width: "35em",  }}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning carouselCaption">Torpedos</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="col-12">
                <img
                    className="d-block mx-auto img-fluid col-12 w-100"
                    src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659758565/Images/carrouselYerbas.jpg'
                    alt="Yerbas"
                    style={{  height: "40em", width: "35em",  }}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning carouselCaption">Yerbas</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="col-12">
                <img
                    className="d-block mx-auto img-fluid col-12 w-100"
                    src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756983/Images/carrouselTermo_lko4k1.jpg'
                    alt="Termos"
                    style={{  height: "40em", width: "35em",  }}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning carouselCaption ">Termos</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item className="col-12">
                <img
                    className="d-block mx-auto img-fluid col-12 w-100"
                    src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659757012/Images/yerberaRojaAccesorio_zlcl1a.jpg'
                    alt="Accesorios"
                    style={{  height: "40em", width: "35em",  }}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning carouselCaption ">Accesorios</h3>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item >
                <img
                    className="d-block mx-auto img-fluid col-12 w-100"
                    src='https://res.cloudinary.com/dwyqyqadz/image/upload/v1659756966/Images/carrouselBombilla_shx7np.jpg'
                    alt="first slide"
                    style={{  height: "40em", width: "35em",  }}
                />
                <Carousel.Caption className="text-center fw-bolder col-sm-auto mx-auto">
                    <h3 className="text-warning carouselCaption">Bombillas</h3>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )

} 
