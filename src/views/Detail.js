import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    const [product, setProduct] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => setProduct(res.data.product))
    }, [props.id])

    const myDelete = () => {
        axios.delete("http://localhost:8000/api/product/delete/" + props.id)
            .then(res => {
                navigate("/");
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="row d-flex justify-content-center my-4">
            <div className="card text-left">
                <div className="card-body">
                    <h4 className="card-title">{product.title}</h4>
                    <div className="card-text">
                        <p>Price: {product.price}$</p>
                        <p>Description: {product.desc}</p>
                    </div>
                </div>
                <div className="card-footer btn-group">
                    <Link className="btn btn-outline-secondary my-2" to="/" >Home</Link>
                    <Link className="btn btn-outline-secondary my-2" to={`/${product._id}/update`} >Update</Link>
                    <button className="btn btn-outline-secondary my-2" onClick={myDelete} >Remove</button>
                </div>
            </div>
        </div>
    )
}