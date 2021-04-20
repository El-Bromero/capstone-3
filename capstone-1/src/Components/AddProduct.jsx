import React, { Component } from 'react'

export default class AddProduct extends Component {

    constructor(props) {
        super(props)

        this.state = {
            name: "",
            price: "0.00",
            category: "",
            quantity: "0",
            productImg: ""
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    submitHandler = e => {
        //e.preventDefault();
        console.log(this.state);
        fetch('/products', {
            method: 'POST',
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
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>Name: </label>
                        <input type="text" name="name" value={name} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Price: </label>
                        <input type="text" name="price" value={price} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Category: </label>
                        <input type="text" name="category" value={category} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>Quantity: </label>
                        <input type="text" name="quantity" value={quantity} onChange={this.changeHandler}/>
                    </div>
                    <div>
                        <label>ProductImg: </label>
                        <input type="text" name="productImg" value={productImg} onChange={this.changeHandler}/>
                    </div>
                    <button type="submit">Add Product</button>
                </form>
                
            </div>
        )
    }
}

//export default AddProduct