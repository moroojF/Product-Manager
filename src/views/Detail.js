import React, { useEffect, useState } from 'react';
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => setProduct(res.data.product))
    }, [props.id])
    return (
        <div className="row d-flex justify-content-center my-4">
            <div class="card text-left">
                <div class="card-body">
                    <h4 class="card-title">Title: {product.title}</h4>
                    <div class="card-text">
                        <p>Price: {product.price}$</p>
                        <p>Description: {product.desc}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <Link to="/" >Go to Home</Link>
                </div>
            </div>
        </div>
    )
}