import React, { useState } from "react";
import shoe from "../images/shoe.png";
import { Link } from "react-router-dom";
import Axios from "axios";

const ProductsList = ({ products }) => {

  const [product, setProduct] = useState([]);

  const btnDelete = async (id) => {
    await Axios.delete(`http://localhost:5000/api/products/${id}`)
      setProduct(product.filter(e => e._id !== id))
  }
  
  return (
    <div>
      <div className="d-flex justify-content-between contenedor">
        <div className="left">
          <h1>WEBSITE ADIDAS</h1>
        </div>
        <div className="rigth">
          <img src={shoe} alt="Shoe" />
        </div>
      </div>
      <div className="row m-4">
        {!products.length
          ? "Loading..."
          : products.map((product) => (
              <div className="col-md-4 mt-5" key={product._id}>
                <div className="card">
                  <div className="card-body">
                    <Link to={{
                      pathname: `/detail/${product._id}`
                    }}>
                      <h1 className="titulo-card">{product.title}</h1>
                    </Link>
                    <hr />
                    <p className="description-card">{product.description}</p>
                    <hr />
                    <p className="authorName-card">{product.authorName}</p>
                    <div className="d-flex justify-content-between">
                      <Link
                        className="btn btn-warning"
                        to={"/edit/" + product._id}
                      >
                        <i className="fas fa-pencil-alt"></i>&nbsp;Edit
                      </Link>
                      <button className="btn btn-danger" onClick={() => btnDelete(product._id)}>
                        <i className="fas fa-trash-alt"></i>&nbsp;Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
      </div>
    </div>
  );
};

export default ProductsList;
