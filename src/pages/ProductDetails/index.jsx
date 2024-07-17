import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {  Row, Col } from 'react-bootstrap';

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error('Error fetching product:', error));
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <Row className='py-5 justify-content-center align-items-center'>
      <Col md={6}>
          <div className='product-details-img border d-flex justify-content-center py-4'>
            <img src={product.image} alt={product.title} />
          </div>
      </Col>

      <Col md={6}>
      <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>Price: ${product.price}</p>
          <p>Category: {product.category}</p>
          <div className="row">
            <div className="col-6">
              <p>Rate: {product.rating.rate}</p>
            </div>
            <div className="col-6">
              <p>Count: {product.rating.count}</p>
            </div>
          </div>
          <button className='btn btn-success text-white'>Buy Now</button>
      </Col>
    </Row>
  );
};

export default ProductDetails;
