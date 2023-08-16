import React from "react";
import { useEffect, useState } from "react";
import { getItem } from "../../mock/data";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";
import { useParams } from "react-router-dom";
import { getProductById } from "../../Services/firebase";

const ItemDetailContainer = () => {
  const [producto, setProducto] = useState({});
  const [loading, setLoading] = useState(false);
  const{id} = useParams()

  // useEffect(() => {
  //   setLoading(true);
  //   getItem(id)
  //     .then((res) => setProducto(res))
  //     .catch((error) => console.log(error))
  //     .finally(() => setLoading(false))
  // }, []);

  useEffect(()=>{
    setLoading(true)
    getProductById(id).then((product) => setProducto(product))
    setLoading(false)
  },[id])

     return (
    <div>
      {loading ? <Loader /> : <ItemDetail producto={producto} />}
      </div>
  );
};

export default ItemDetailContainer;
