
function Buttons (props) {
    return(
        <div 
        className={props.btn}
        style={{fontFamily:props.font}}
        onClick={props.handleClick}  
        >
   {props.valor}
        </div> 
    )
}
export default Buttons;