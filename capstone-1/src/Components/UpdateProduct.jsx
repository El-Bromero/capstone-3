import React, { Component } from 'react'
import './AddProduct.css'

export default class UpdateProduct extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: this.props.name,
            price: this.props.price,
            category: this.props.category,
            quantity: this.props.quantity,
            productImg: this.props.productImg
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        fetch('/products/id/' + this.props.serialNumber, {
            method: 'PUT',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: this.state.name,
                price: this.state.price,
                category: this.state.category,
                quantity: this.state.quantity,
                productImg: this.state.productImg
            })
        })
    }

    render() {

        const { name, price, category, quantity, productImg } = this.state

        return (
            <div className="formDiv">

                <div><h2>Update Product:</h2></div>

                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Name: </label>
                        <input type="text" className="formInput" name="name" value={name} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Price: </label>
                        <input type="text" className="formInput" name="price" value={price} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Category: </label>
                        <input type="text" className="formInput" name="category" value={category} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Quantity: </label>
                        <input type="text" className="formInput" name="quantity" value={quantity} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>ProductImg: </label>
                        <input type="text" className="formInput" name="productImg" value={productImg} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit" className="submitButton">Update</button>
                </form>
                
            </div>
        )
    }
}