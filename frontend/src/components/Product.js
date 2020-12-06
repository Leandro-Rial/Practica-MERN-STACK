import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Product = (props) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [authorName, setAuthorName] = useState("");

  useEffect(() => {
    axios
      .get(`http://localhost:5000/api/products/${props.match.params.id}`)
      .then((res) => [
        setTitle(res.data.title),
        setDescription(res.data.description),
        setAuthorName(res.data.authorName),
      ])
      .catch((error) => console.log(error));
  }, [props]);

  return (
    <div>
      {!title || !description || !authorName ? (
        "Loading"
      ) : (
        <div className="col-md-12 mt-5">
          <h1 className="details">Details of products</h1>
          <div className="card mt-5">
            <div className="card-body">
              <h1 className="titulo-card">{title}</h1>
              <hr />
              <p className="description-card">{description}</p>
              <hr />
              <p className="authorName-card">{authorName}</p>
              <div className="d-flex justify-content-between">
                <Link className="btn btn-warning" to="/">
                  <i className="fas fa-home"></i>&nbsp;Go back
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
