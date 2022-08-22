import React from "react";
import './IntroHome.css'
import 'animate.css';


export default function SaludoHome() {
    return (
        <>
            <div className=" d-flex row col-xl-12">
                <div className="home-saludo text-warning">
                <h1 className="text-warning fw-bold">Bienvenido a S&A Mimate</h1>
                <h4 className="p-home animate__animated animate__fadeInLeft">
                    Somos un emprendimiento joven dedicado a la venta de productos para el
                    mate, buscando ofrecer gran variabilidad y accesibilidad para todos
                    los gustos. Fieles convencidos de que la felicidad está en el contacto
                    humano y qué mejor que unos buenos mates para compartir momentos !
                </h4>
                </div>
                <div className="carrouselHome">

                </div>
            </div>
        </>
    );
}
