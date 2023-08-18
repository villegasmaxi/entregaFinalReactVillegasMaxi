import React, { useState,  useEffect  } from "react";
import ProductsList from "../components/ProductsList";
import "./ProductsPage.css";
import Loader from "../components/Loader/Loader";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where } from "firebase/firestore";
import {db} from "../Services/firebase";


function ProductsPage(props) {
 
  const [products, setProducts] = useState([]);
  const [loading, setLoading]= useState(false)
  const {categoryId}= useParams()

useEffect(() => {
  setLoading(true)
  const coleccionProductos = categoryId ? query(collection(db, "products"), where("category", "==", categoryId)):collection(db, "products");
  getDocs(coleccionProductos)
  .then((res)=> {
    const list = res.docs.map((product)=>{
      return{
        id:product.id,
        ...product.data()
      }
    })
    setProducts(list)
  })
  .catch((error)=> console.log(error))
  .finally(()=> setLoading(false))
},[categoryId])

  return (
  <div>
    { 
    loading ? < Loader/> : <div className="container-fluid  pb-4 content">
      <h1 className="h1">{props.title}<span>{categoryId && categoryId} </span></h1>
      <h2 className="h2">{props.subTitle}</h2>
      <ProductsList products={products}/>
    </div>
    }
  </div>
    
  );
};
export default ProductsPage;
