import React, { useState } from "react";
import { useContext } from "react";
import Form from "react-bootstrap/Form";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../../Services/firebase";
import { CartContext } from "../../context/CartContext";

const Checkout = () => {
  const [user, setUser] = useState({});
  const [validateEmail, setValidateEmail] = useState(" ");
  const { cart, total, clear } = useContext(CartContext);
  const [orderId, setOrderId] = useState(" ");

  const datosComprador = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    let order = {
      user,
      item: cart,
      total: total(),
      date: serverTimestamp(),
    };
    const ventas = collection(db, "orders");
    addDoc(ventas, order)
      .then((res) => {
        setOrderId(res.id);
        clear();
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {orderId !== " " ? (
        <div className="d-flex flex-column align-items-center">
          <h2> Felicitaciones has realizado tu compra !!!</h2>
          <h6>Su id de registro es:</h6>
          <h5 className="border border-info p-3 m-2"> {orderId} </h5>
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center">
          <h2> Terminando la compra</h2>
          <h5> Rellena tu formulario aquí abajo</h5>
          <div className="container">
            <Form onSubmit={finalizarCompra}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Nombre</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ingresa tu nombre aquí"
                  name="name"
                  onChange={datosComprador}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Apellido</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="ingresa tu Apellido aquí"
                  name="lastName"
                  onChange={datosComprador}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Numero de teléfono</Form.Label>
                <Form.Control
                  type="number"
                  placeholder="+54 9 11 2222-2222 "
                  name="phone"
                  onChange={datosComprador}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="mail"
                  onChange={datosComprador}
                />
              </Form.Group>

              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Reingrese Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="name@example.com"
                  name="mail"
                  onChange={(e) => setValidateEmail(e.target.value)}
                />
              </Form.Group>
              <button
                className="btn btn-warning"
                type="submit"
                disabled={validateEmail !== user.mail}
              >
                Generar Orden
              </button>
            </Form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Checkout;
