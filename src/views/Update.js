import React, { useEffect, useState } from 'react';
import { Link, navigate } from '@reach/router';
import axios from 'axios';

export default props => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(1);
    const [desc, setDesc] = useState("");
    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
            .then(res => {
                setTitle(res.data.product.title);
                setPrice(res.data.product.price);
                setDesc(res.data.product.desc)
            })
    }, [props.id])

    const myUpdate = e => {
        e.preventDefault();
        axios.put("http://localhost:8000/api/product/update/" + props.id, {
            title,
            price,
            desc
        }).then(res => {
            console.log(res);
            navigate("/" + props.id)
        })
            .catch(err => console.log(err))
    }

    return (
        <div className="row d-flex justify-content-center my-4">
            <div className="card text-left">
                <div className="card-body">
                    <h4 className="card-title">Update Product</h4>
                    <div className="card-text">
                        <form onSubmit={myUpdate}>
                            <div className="form-grpup">
                                <label>Title:</label>
                                <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
                            </div>
                            <div className="form-grpup">
                                <label>Price:</label>
                                <input type="number" min="1" className="form-control" onChange={e => setPrice(e.target.value)} value={price} />
                            </div>
                            <div className="form-grpup">
                                <label>Description:</label>
                                <input type="text" className="form-control" onChange={e => setDesc(e.target.value)} value={desc} />
                            </div>
                            <div className="form-grpup">
                                <input type="submit" className="btn btn-outline-secondary my-4" value="Update" />
                            </div>
                        </form>
                    </div>
                </div>
                <div className="card-footer">
                    <Link to="/" >Go to Home</Link>
                </div>
            </div>
        </div>
    )
}