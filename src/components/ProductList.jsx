import React from 'react'
import { Link } from '@reach/router';

export default props => {
    return (
        <div>
            {props.products.map((product) => {
                return <div key={product._id}> 
                <Link to={`/${product._id}`} > { product.title }</Link>
                </div>
            })}
        </div >
    )
}
