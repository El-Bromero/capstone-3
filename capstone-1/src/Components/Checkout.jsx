import React from 'react';
import { useStateValue } from './StateProvider';
import './Checkout.css';
import leavesImage from  '../Images/leaves.jfif';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';

function Checkout() {

    const [{ cart }] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-img" src={leavesImage} alt="" />

                {/* If the cart is empty then show the info that the cart is empty else show the list of items and their info in the shopping cart */}
                {cart?.length === 0 ? (
                    <div>
                        <h2>Your Shopping Cart is empty!</h2>
                        <br/>
                        <p>
                            You currently have no items in your cart. To add an item you need to go back to the home page and click on "Add to cart" for the item(s) you need.
                        </p>
                    </div>) : 
                    (
                    <div>
                        <h2 className="checkout-title">Your Shopping Cart</h2>
    
                        {/* List out all of the checkout items */}
                        {cart?.map(item => (
                            <CheckoutProduct 
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                category={item.category}
                                quantity={item.quantity}
                                price={item.price}
                            />
                        ))}
                        
                    </div>
                    )
                }
            </div>
            { cart.length > 0 && (
                <div className="checkout-right">
                    {/* Get subtotal of cart here. Will be moved to right side of the page */}
                    {/* <Subtotal/> */}
                </div>
            )}
        </div>

    )
}

export default Checkout;
