import React from "react";
import { Link } from "react-router-dom";

import Card from "../../../shared/components/UIElements/Card";
import './CartItem.css'


const CartItem = props => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <Link to={`/products/${props.id}`}>
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h1>${props.price}</h1>
            <p>{props.description}</p>
          </div>
          <div className="place-item__actions"></div>
        </Link>
      </Card>
    </li>
  );
}

export default CartItem;
