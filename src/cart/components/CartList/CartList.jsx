import React from 'react'
import Card from '../../../shared/components/UIElements/Card'

import CartItem from '../CartItem/CartItem'
import './CartList.css'

import productService from '../../../products/services/productService'

const CartList = props => {
    if (props.items.length === 0) {
        return <div className="place-list center">
            <Card>
                <h2>No products found</h2>
            </Card>
        </div>
    }

    console.log(productService.getProducts())

    return <ul className="place-list">
        {props.items.map(item => (
            <CartItem
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
    }

export default CartList