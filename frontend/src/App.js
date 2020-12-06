import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductsList from './components/ProductsList';
import CreateProduct from './components/CreateProduct';
import EditProduct from './components/EditProduct';
import Product from './components/Product';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/products')
      .then(res => setProducts(res.data))
      .catch(error => console.log(error));
  }, [products]);

  return (
    <Router>
      <Navbar />

      <div>
        <Route exact path="/" render={() => <ProductsList products={products} />} />
        <Route path="/edit/:id" render={(props) => <EditProduct {...props} products={products} />} />
        <Route path="/create" component={CreateProduct} />
        <Route path="/detail/:id" render={(props) => <Product {...props} products={products} />} />
      </div>
    </Router>
  );
}

export default App;
