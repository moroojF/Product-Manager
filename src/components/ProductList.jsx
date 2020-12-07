import React from 'react'
import { Link } from '@reach/router';

export default props => {
    return (
        <div>
            {props.products.map((product) => {
                return <p key={product._id}><Link to={`/${product._id}`} > { product.title }</Link></p>
            })}
        </div >
    )
}
