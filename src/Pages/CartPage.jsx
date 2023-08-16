import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";
import Buttons from "../components/Buttons/index";
import { Button } from "react-bootstrap";
import CartItem from "../components/CartItem";

function Cart() {
  const { cart, clear, total } = useContext(CartContext);

  return (
    <div>
      {cart.length ? (
        <div>
          {cart.map((item)=> <CartItem key={item.id} item={item} />)}
         
          <div className="d-flex m-3 justify-content-center">
            <Buttons
              btn="btn btn-danger"
              valor="Vaciar carrito"
              font="sans-serif"
              handleClick= {() => (clear())}
            />
            <Link to="/Checkout" className="ms-5">
              <Buttons
              btn="btn btn-success"
              valor="Terminar compra"
              font="sans-serif"
              />
            </Link>
            <h5 className="ms-5"> Monto total: ${total()} </h5>
          </div>
        </div>
      ) : (
        <div className=" container d-flex flex-column align-items-center">
          <h3 className="m-3">No hay nada en el carrito</h3>
          <Link to="/" >
          <Button variant="success" className="btn m-3"> Compra algo </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Cart;
