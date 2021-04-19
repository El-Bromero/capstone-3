import React from 'react';
import './CheckoutProduct.css';
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, category, quantity, price}) {
    const [{ cart }, dispatch] = useStateValue();

    // Send REMOVE_FROM_CART action with dispatch to the reducer so that it can remove the item from cart
    const removeFromCart = () => {
        dispatch({
            type: "REMOVE_FROM_CART",
            id: id,
        })
    }

    return (
        // Info of the product in the checkout. Also has button that removes item from cart if clicked
        <div className="checkoutProduct">
            <img className="checkoutProduct-img" src={image} alt=""/>

            <div className="checkoutProduct-info">
                <p className="checkoutProduct-title">{title}</p>
                <p className="checkoutProduct-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <button onClick={removeFromCart}>Remove from cart</button>
            </div>
        </div>
    )
}

export default CheckoutProduct;
