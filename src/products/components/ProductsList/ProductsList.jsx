import React from 'react'

import Card from '../../../shared/components/UIElements/Card'
import ProductItem from '../ProductItem/ProductItem'
import './ProductsList.css'

const ProductsList = props => {

    if (props.items.length === 0) {
        return <div className="place-list center">
            <Card>
                <h2>No products found</h2>
            </Card>
        </div>
    }

  return (
    <ul className="products-list">
        {props.items.map(item => (
            <ProductItem
                key={item.id}
                id={item.id}
                image={item.imageUrl}
                title={item.title}
                description={item.description}
                price={item.price}
                creatorId={item.creator}
            />
        ))}
    </ul>
  )
}

export default ProductsList