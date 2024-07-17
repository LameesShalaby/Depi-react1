import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Product = ({ product }) => {
  const truncateText = (text, wordLimit) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };
  return (
    <Card className='mb-4'>
      <Card.Body>
        <div className='product-img-style'>
        <img src={product.image}  alt={product.title} />
        </div>
        <Card.Title>{truncateText(product.title, 4)}</Card.Title>
        <Card.Text>{truncateText(product.description, 8)} </Card.Text>
        <p>Price: ${product.price}</p>
        <Link to={`/products/${product.id}`} className='btn btn-success text-white'>View Details</Link>


      </Card.Body>
    </Card>
  );
};

export default Product;