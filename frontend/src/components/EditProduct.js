import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditProduct = (props) => {
    
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [authorName, setAuthorName] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault();
        
        const products = {
            title,
            description,
            authorName
        };

        setTitle('');
        setDescription('');
        setAuthorName('');

        await axios.put(`http://localhost:5000/api/products/edit/${props.match.params.id}`, products)
            .then(res => console.log(res.data))
            .catch(err => {
                console.log(err)
            })

        window.location.href = '/'
    }

    useEffect(() => {
        axios
          .get(`http://localhost:5000/api/products/${props.match.params.id}`)
          .then((res) => [
            setTitle(res.data.title),
            setDescription(res.data.description),
            setAuthorName(res.data.authorName),
          ])
          .catch((error) => console.log(error));
      }, []);
    
    return (
        <div className="col-md-6 offset-md-3 mt-5">

            <h1 className="titulo-create">UPDATE PRODUCT</h1>

            {/* Input */}
            
            <div className="form-group">
                <label htmlFor="authorName">
                    <h1 className="label-title">Author Name</h1>
                </label>
                <input type="text" name="authorName" className="form-control" onChange={e => setAuthorName(e.target.value)} value={authorName} />
            </div>
            
            <div className="form-group">
                <label htmlFor="title">
                    <h1 className="label-title">Title</h1>
                </label>
                <input type="text" name="title" className="form-control" onChange={e => setTitle(e.target.value)} value={title} />
            </div>
            
            <div className="form-group">
                <label htmlFor="description">
                    <h1 className="label-title">Description</h1>
                </label>
                <textarea name="description" className="form-control" cols="30" rows="5" onChange={e => setDescription(e.target.value)} value={description} ></textarea>
            </div>
            
            <form onSubmit={onSubmit}>

                <button type="submit" className="btn btn-success btn-block mb-5">
                    Update Product
                </button>

            </form>
        </div>
    )
}

export default EditProduct
