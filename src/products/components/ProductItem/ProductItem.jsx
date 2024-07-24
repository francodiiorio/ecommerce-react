import React from 'react'
import { Link } from 'react-router-dom'

import Card from '../../../shared/components/UIElements/Card'
import './ProductItem.css'

const ProductItem = props => {
  return (
    <li className="product-item">
      <Card className="product-item__content">
        <Link to={`/products/${props.id}`}>
          <div className="product-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="product-item__info">
            <h2>{props.title}</h2>
            <h1>${props.price}</h1>
            <p>{props.description}</p>
          </div>
          <div className="product-item__actions"></div>
        </Link>
      </Card>
    </li>
  )
}

export default ProductItem