import React, { useContext } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { Badge} from 'react-bootstrap';
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const {cartQuantity} = useContext(CartContext)
    return (
<div className="cart">
  <FiShoppingCart size={25}/>
  {cartQuantity() > 0 && <Badge bg="danger">{cartQuantity()}</Badge>}
</div>
    )
};
export default CartWidget;