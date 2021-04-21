import React, { useState, useEffect } from 'react';
import './Home.css';
import AdminProduct from './AdminProduct';
import AddProduct from './AddProduct';

function Admin() {

    const url = '/products';

    useEffect(() => {
        fetch(url)
        .then(response => response.json())
        .then(data => setInventoryData(data));
    }, [])

    const [inventoryData, setInventoryData] = useState([]);

    // Load up data from json file to be used in processing product info on home page
    return (
        <div className="home">

            <div className="home-row">
                {/* Pass each product info to Product component */}
                {inventoryData.map(info => 
                    <AdminProduct 
                        name={info.name} 
                        serialNumber={info.id} 
                        price={info.price} 
                        category={info.category} 
                        quantity={info.quantity} 
                        productImage={info.productImg}
                    />)
                }
            </div>
            
            <div>
                <AddProduct/>
            </div>
        </div>
    )
}

export default Admin;
