import React, { useState } from 'react';
import './Product.css'
import Modal from 'react-modal';
Modal.setAppElement('#root');

function Product({ name, serialNumber, price, category, quantity, productImage }) {

    const url = '/carts';
    
    // Send ADD_TO_CART action with dispatch to reducer. Adds item to cart
    const addToCart = () => {
        fetch(url, {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                cartId : serialNumber,
                productCart : {
                    name: name,
                    id : serialNumber,
                    price: price,
                    category: category,
                    quantity: quantity,
                    productImg: productImage
                },
                product_quantity : 1
                
            })
        })
    };

    // useState for modal if open or not
    const [modalIsOpen, setModalIsOpen] = useState(false);
    
    return (
        <div className="product">
            <div className="product-info">
                <p>{name}</p>
                <p className="product-price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
            </div>
            <div className="product-bottom">
                <img src={productImage} alt="" />
                <button onClick={() => setModalIsOpen(true)}>View item details</button>
                <button onClick={addToCart}>Add to cart</button>
            </div>
            {/* Use Modal from library to have complete info of the product. User can exit by clicking outside of modal, by using ESC key, or by clicking on close button  */}
            <Modal 
                isOpen={modalIsOpen} 
                onRequestClose={() => setModalIsOpen(false)}
                style={
                    {
                        overlay: {
                            zIndex: '1000'
                        },
                        content: {
                            color: 'black',
                            display: 'flex',
                            flexDirection: 'column',
                            top: '150px',
                            left: '300px',
                            right: '300px',
                            bottom: '250px',
                            minHeight: '200px',
                            minWidth: '200px'
                        }
                    }
                }
            >
                {/* Product info that is passed to modal */}
                <h1 className="product-modalTitle">{name}</h1>
                <ul>
                    <li>Price: ${price}</li>
                    <li>Serial Number: {serialNumber}</li>
                    <li>Category: {category}</li>
                    <li>Quantity: {quantity}</li>
                    <img src={productImage} alt="" className="product-img" />
                    
                </ul>
                <button onClick={() => setModalIsOpen(false)} className="product-modalButton">Close</button>
            </Modal>
        </div>
    )
}

export default Product;
