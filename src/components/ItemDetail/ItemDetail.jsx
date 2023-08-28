import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  const [quantityAdded, setQuantityAdded] = useState(false);
  const { addItem } = useContext(CartContext);
  const onAdd = (cantidad) => {
    setQuantityAdded(true);
    addItem(producto, cantidad);
  };

  return (
    <div className="container d-flex flex-column align-items-center mt-2 mb-2  p-3 border border-2 border-info rounded-3">
      <h4>Producto: {producto.name} </h4>
      <h5>{producto.description}</h5>
      <h4 className="fw-bold">Precio: $ {producto.price}</h4>
      <img src={producto.img} className=" w-25 mt-3 img-fluid " alt="" />
      {!quantityAdded ? (
        <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />
      ) : (
        <Link to="/Cart" className=" m-3 btn btn-lg btn-warning">
          ir al carrito
        </Link>
      )}
    </div>
  );
};

export default ItemDetail;
