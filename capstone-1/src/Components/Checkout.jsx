import React, {useEffect, useState} from 'react';
import './Checkout.css';
import leavesImage from  '../Images/leaves.jfif';
import CheckoutProduct from './CheckoutProduct';

function Checkout() {

    const url = '/carts';

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setCartData(data));
    }, [])

    const [cartData, setCartData] = useState([]);

    return (
        <div className="checkout">
            <div className="checkout-left">
                <img className="checkout-img" src={leavesImage} alt="" />

                {
                cartData?.length === 0 ? (
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
    
                        {cartData?.map(item => (
                            <CheckoutProduct 
                                id={item.productCart.id}
                                title={item.productCart.name}
                                image={item.productCart.productImg}
                                category={item.productCart.category}
                                quantity={item.productCart.quantity}
                                price={item.productCart.price}
                                product_quantity={item.product_quantity}
                            />
                        ))}
                        
                    </div>
                    )
                }
            </div>
            
        </div>

    )
}

export default Checkout;
