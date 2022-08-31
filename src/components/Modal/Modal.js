import React, { useRef, useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useCartContext } from "../../context/CartContext";
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import { addDoc, collection, doc, updateDoc, serverTimestamp, getFirestore } from "firebase/firestore";


const ModalConfirmarCompra = ({ show, handleClose }) => {
    const [idOrder, setIdOrder] = useState("")
    const [compraConfirmada, setCompraConfirmada] = useState(false)
    const [dataRejected, setDataRejected] = useState(false);
    const [nombre, setNombre] = useState("")
    const [address, setAddress] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState(0);
    const { precioFinal, cart, LimpiarCart } = useCartContext();
    const dataBase = getFirestore();
    const ordersCollection = collection(dataBase, 'orders');
    const order = {
        customer: {
            name: nombre,
            email: email,
            phone: phone,
            address: address,
            date: serverTimestamp()
        },
        items: cart.map(producto => ({ id: producto.id, nombre: producto.nombre, precioUnitario: producto.precio, cantidad: producto.cantidad, subtotal: producto.precio * producto.cantidad })),
        total: precioFinal(),
    }

    const updateNombre = (e) => {
        setNombre(e.target.value);
    }
    const updateEmail = (e) => {
        setEmail(e.target.value);
    }
    const updateAddress = (e) => {
        setAddress(e.target.value);
    }
    const updatePhone = (e) => {
        setPhone(parseInt(e.target.value));
    }

    let nameRef = useRef(); let emailRef = useRef(); let phoneRef = useRef(); let addressRef = useRef()

    const ConfirmarCompra = () => {
        addDoc(ordersCollection, order)
            .then((res) => {
                setIdOrder(res.id)
            })
            .catch((error) => {
                console.log(error)
            })
            .finally(() => {
                setCompraConfirmada(true)
            })
        cart.forEach((item) => {
            const itemRef = doc(dataBase, 'products', item.id)
            updateDoc(itemRef, {
                stock: item.stock - item.cantidad,
            })
        })
    }
    const validacionDatos = (e) => {
        e.preventDefault();

        let checkEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (nombre === "") {
            nameRef.current.focus();
            setDataRejected(true)
        } else if (!checkEmail.test(email)) {
            emailRef.current.focus();
            setDataRejected(true)
        } else if (phone <= 0 || isNaN(phone)) {
            phoneRef.current.focus();
            setDataRejected(true)
        } else if (address === "") {
            addressRef.current.focus();
            setDataRejected(true)
        } else {
            ConfirmarCompra();
            setDataRejected(false)
        }
    }


    return (
        <>
            {compraConfirmada ?

                <Modal show={show} onHide={handleClose} size='xl' centered  >
                    <Modal.Header>
                        <Modal.Title >¡Compra Finalizada!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <h4>Felicitaciones, tu compra se ha hecho con éxito. Comunicate a nuestro whatsapp y escribinos el numero de referencia de tu compra, el cual es : <strong>{idOrder}</strong> </h4>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center">
                        <Button className="w-100" variant="outline-info" onClick={LimpiarCart}>
                            Cerrar
                        </Button>
                    </Modal.Footer>
                </Modal>
                :
                <Modal style={{ overflow: "auto", }} show={show} onHide={handleClose} size='xl'   >
                    <Modal.Header closeButton>
                        <Modal.Title >¡Ya casi estamos por finalizar tu compra!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card className="formUserCheckout">
                            <Form className="m-3" onSubmit={validacionDatos}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label className="text-dark">Email</Form.Label>
                                    <Form.Control onChange={(e) => updateEmail(e)} type="email" placeholder="Ingrese su email" required />
                                    <Form.Text className="text-dark fw-bolder ">
                                        Nunca revelaremos esta informacion.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label className="text-dark">Nombre y Apellido</Form.Label>
                                    <Form.Control onChange={(e) => updateNombre(e)} type="text" placeholder="Indicanos tu nombre" required />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicAdress">
                                    <Form.Label className="text-dark">Direccion</Form.Label>
                                    <Form.Control onChange={(e) => updateAddress(e)} type="text" placeholder="Indicanos tu Direccion" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicPhone">
                                    <Form.Label className="text-dark">Telefono</Form.Label>
                                    <Form.Control onChange={(e) => updatePhone(e)} type="text" required placeholder="Indicanos un numero de contacto" />
                                </Form.Group>
                                <Button className="w-100" type="submit" variant="outline-success">
                                    Finalizar compra
                                </Button>
                            </Form>
                        </Card>
                    </Modal.Body>
                    <Modal.Footer className="justify-content-center footerModal">
                        <Button className="w-100" variant="outline-danger" onClick={handleClose}>
                            Cancelar
                        </Button>
                    </Modal.Footer>
                </Modal>
            }
        </>

    )
}
export default ModalConfirmarCompra;