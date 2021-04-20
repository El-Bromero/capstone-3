import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Home.css';
import Product from './Product';
import homeImage from '../Images/soil-hands-banner.jfif'
import inventory from '../Data/inventory.json';

function Home() {

    //const loadData = JSON.parse(JSON.stringify(inventory));

    const url = '/products';

    useEffect(() => {
        // axios.get(url).then(json => setInventoryData(json.inventoryData));
        // console.log(setInventoryData);
        fetch(url)
        .then(response => response.json())
        .then(data => setInventoryData(data));
        // .then(data => console.log(data));
        console.log(inventoryData);
    }, [])

    //const [inventoryData, setInventoryData] = useState(loadData);
    const [inventoryData, setInventoryData] = useState([]);

    // Load up data from json file to be used in processing product info on home page
    return (
        <div className="home">
            <img className="home-image" src={homeImage} alt="" />

            <div className="home-row">
                {/* Pass each product info to Product component */}
                {inventoryData.map(info => 
                    <Product 
                        name={info.name} 
                        serialNumber={info.id} 
                        price={info.price} 
                        category={info.category} 
                        quantity={info.quantity} 
                        productImage={info.productImg}
                    />)
                }
            </div>
        </div>
    )
}

export default Home;
