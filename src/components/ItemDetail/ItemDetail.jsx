import React, { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ producto }) => {
  const [quantityAdded, setQuantityAdded] = useState(false);
  const { addItem } = useContext(CartContext);
  const onAdd = (cantidad) => {
    alert(`compraste ${cantidad} unidades de: ${producto.name}`);
    setQuantityAdded(true);
    addItem(producto, cantidad)
  };

  return (
<div className="container d-flex flex-column align-items-center  p-2 border border-1 border-dark">
      <h4>Producto: {producto.name} </h4>
      <h5>{producto.description}</h5>
      <h4>Precio: $ {producto.price}</h4>
      <img src={producto.img} className=" img-fluid " alt="" />
      {!quantityAdded ? ( <ItemCount initial={1} stock={producto.stock} onAdd={onAdd} />) : (
        <Link to='/Cart' className=" m-3 btn btn-lg btn-warning">
          ir al carrito
        </Link>
      )}
     
    </div>
  );
}; 



export default ItemDetail;
