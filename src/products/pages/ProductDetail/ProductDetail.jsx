import React from "react";

import "./ProductDetail.css"
import Button from "../../../shared/components/FormElements/Button";

const ProductDetail = () => {
    return (
        <div className="product-detail__content">
            <div className="product-info">
                <h1>Product page render</h1>
                <h2>$25</h2>
                <p>Esta es la descripcion de este gran producto</p>
                <div className="product-info__btn">
                    <Button size="big" to={`/places`}>Buy</Button>
                    <Button size="big">Add to cart</Button>
                </div>
            </div>

            <div className="product-detail__image">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Empire_State_Building_%28aerial_view%29.jpg/420px-Empire_State_Building_%28aerial_view%29.jpg" alt="billetera" />
            </div>
        </div>

    )
};

export default ProductDetail;