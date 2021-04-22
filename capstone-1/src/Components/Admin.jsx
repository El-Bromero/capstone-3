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

    return (
        <div className="home">

            <div className="home-row">
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
