import Card from "react-bootstrap/Card";
import Counter from "../ItemCount";
import { useState, useEffect } from "react";
import getFetch from "../Data/productos";
import './index.css' //problema al importar archivo css de cards de productos


export default function Item() {
    function descrItem() {
        return alert("¡Sitio en construcción!");
    }
    const [Data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getFetch
            .then((resp) => setData(resp))
            .catch((err) => console.log(err))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="container row col-12 m-1 p-1 justify-content-evenly">
            {loading ? (
                
                <h3 className="text-dark text-center bg-warning ">
                    ¡Aguarde!, sus productos estan siendo cargados
                </h3>
            ) : (
                Data.map((prod) => (
                    <Card key={prod.id} className="col-3 m-2 p-2 card-producto">
                        <Card.Img
                            variant="top"
                            src={prod.imagen} //no me cargan las imagenes
                            className="img-fluid img-producto"
                        />
                        <Card.Body>
                            <Card.Title className="text-light fw-lighter">
                                {prod.categoria}: <br/> {prod.nombre}
                            </Card.Title>
                            <Card.Text className="fw-bold fs-3 text-light">${prod.precio}</Card.Text>
                            <button onClick={descrItem} className="btnDescrItem mb-3">
                                ¡Ver descripcion del producto!
                            </button>
                            <Counter  stock={prod.stock} initial={1} />
                        </Card.Body>
                    </Card>
                ))
            )}
        </div>
    );
}
