import "./index.css"
function Cartwidget (props) {
    return(
<>
<div className="cart">
   <img className="iconCart" src="https://i.postimg.cc/L8F3MbQN/cart-vector.png" alt="" />
   {props.valor}
</div>

</>
    )
}
export default Cartwidget