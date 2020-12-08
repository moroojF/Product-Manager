import React, { useState } from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';

const AddForm = props => {
    const { initialTitle, initialPrice, initialDesc, onSubmitProp, action } = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [desc, setDesc] = useState(initialDesc);

    const myCreate = e => {
        e.preventDefault();
        onSubmitProp({
            title,
            price,
            desc
        });
    }
    return (
        <div className="row d-flex justify-content-center my-4">
            <div className="card text-left">
                <div className="card-body">
                    <h4 className="card-title">{action} Product</h4>
                    <div className="card-text">
                        <form onSubmit={myCreate}>
                            <div className="form-grpup">
                                <label>Title:</label>
                                <input type="text" className="form-control" onChange={e => setTitle(e.target.value)} defaultValue={initialTitle} />
                            </div>
                            <div className="form-grpup">
                                <label>Price:</label>
                                <input type="number" min="1" className="form-control" onChange={e => setPrice(e.target.value)} defaultValue={initialPrice} />
                            </div>
                            <div className="form-grpup">
                                <label>Description:</label>
                                <input type="text" className="form-control" onChange={e => setDesc(e.target.value)} defaultValue={initialDesc} />
                            </div>
                            <div className="form-grpup">
                                <input type="submit" className="btn btn-outline-secondary my-4" value={action} />
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AddForm;
