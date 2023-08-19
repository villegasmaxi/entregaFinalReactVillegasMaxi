import { useState } from "react";
import Buttons from "../Buttons";

const ItemCount = ({ stock, onAdd, initial }) => {
  const [count, setCount] = useState(initial);

  const sumar = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };
  const restar = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };
  return (
    <div>
      <div className="mt-3 bg-light d-flex justify-content-evenly">
        <Buttons
          btn="btn btn-secondary"
          valor="+1"
          handleClick={() => sumar()}
        ></Buttons>

        <span className=" border border-1 border-dark  bg-light text-dark fs-5 ms-2 me-2 ps-2 pe-2">
          {" "}
          Cantidad items:{count}{" "}
        </span>

        <Buttons
          btn="btn btn-secondary"
          valor="-1"
          handleClick={() => restar()}
        ></Buttons>

        <Buttons
          btn="btn btn-success ms-3  fs-5"
          disabled={count === 0 || stock === 0}
          valor="Comprar"
          handleClick={() => onAdd(count)}
        ></Buttons>
      </div>
    </div>
  );
};

export default ItemCount;
