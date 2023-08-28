import React from 'react'
import Item from './Product'

const ProductsList = ({products}) => {
  return (
    <div className="d-flex justify-content-around align-items-start flex-wrap ">
        {products.map((prod)=> <Item key={prod.id} prod={prod}/>)}
    </div>
  )
}

export default ProductsList;