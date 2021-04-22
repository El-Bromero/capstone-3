import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, category, quantity, price, product_quantity}) {

    const url = '/carts/id/';

    const removeFromCart = () => {

        fetch(url + id, {
            method: 'DELETE',
        })
        window.location.reload(false);
    }

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct-img" src={image} alt=""/>

            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{title}</p>
                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <p><strong>Quantity: {product_quantity}</strong></p>
                <button onClick={removeFromCart}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
