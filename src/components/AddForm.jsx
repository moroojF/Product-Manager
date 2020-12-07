import React, { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const AddForm = () => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(1);
    const [desc, setDesc] = useState("");

    const myCreate = e => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/product/new", {
            title,
            price,
            desc
        }).then(res => console.log(res))
            .catch(err => console.log(err))
    }
    return (
        <div className="row d-flex justify-content-center my-4">
            <div className="card text-left">
                <div className="card-body">
                    <h4 className="card-title">New Product</h4>
                    <div className="card-text">
                        <form onSubmit={myCreate}>
                            <div className="form-grpup">
                                <label>Title:</label>
                                <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
                            </div>
                            <div className="form-grpup">
                                <label>Price:</label>
                                <input type="number" className="form-control" onChange={e => setPrice(e.target.value)} value={price} />
                            </div>
                            <div className="form-grpup">
                                <label>Description:</label>
                                <input type="text" className="form-control" onChange={e => setDesc(e.target.value)} value={desc} />
                            </div>
                            <div className="form-grpup">
                                <input type="submit" className="btn btn-outline-secondary my-4" value="Create" />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddForm;
