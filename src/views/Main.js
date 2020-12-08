import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddForm from '../components/AddForm';
import ProductList from '../components/ProductList';
export default () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProducts(res.data.products);
                setLoaded(true);
            });
    }, [products]);
    const removeFromDom = productId => {
        setProducts(products.filter(product => product._id = !productId));
    }
    return (
        <div className="container">
            <AddForm />
            {loaded && <ProductList products={products} removeFromDom={removeFromDom} />}
        </div>
    )
}
