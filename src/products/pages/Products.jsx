import React, { useEffect, useState } from 'react'
import productServices from '../services/productService'
import ProductsList from '../components/ProductsList/ProductsList' 

const Products = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
      productServices.getProducts().then( products => {
          setProducts(products)
      })
      .catch(err => {
          console.log(err)
      })
  }, [])
  console.log(products)
  return <ProductsList items={products}/>
}

export default Products