import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';
import axios from 'axios';
import AddForm from '../components/AddForm';

export default props => {
    console.log(props);
    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => {
                setProduct(res.data.product);
                setLoaded(true);
            })
    }, [props.id])

    const myUpdate = product => {
        axios.put("http://localhost:8000/api/product/update/" + props.id, product)
        .then(res => {
            console.log(res);
            navigate("/" + props.id)
        })
            .catch(err => console.log(err))
    }

    return (
        <AddForm onSubmitProp={myUpdate} initialTitle={product.title} initialPrice={product.price} initialDesc={product.desc} action="Update"/>
    )
}