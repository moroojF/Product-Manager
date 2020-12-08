import React from 'react'
import { Link } from '@reach/router';
import axios from 'axios';

export default props => {
    const { removeFromDom } = props;

    const myDelete = productId => {
        axios.delete("http://localhost:8000/api/product/delete/" + productId)
            .then(res => {
                removeFromDom(productId);
            })
            .catch(err => console.log(err))
    }

    return (
        <div>
            {props.products.map((product) => {
                return <div key={product._id}>
                    <Link to={`/${product._id}`} > {product.title}</Link>
                    <button onClick={e => { myDelete(product._id) }} className="btn btn-outline-secondary my-2" >Remove</button>
                </div>
            })}
        </div >
    )
}
