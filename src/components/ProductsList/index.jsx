// import {useState , useEffect} from 'react'
// import {Row, Col} from 'react-bootstrap';
// import Product from './Product';

// const ProductsList = ({search}) => {
//   const [data, setData]= useState();
//   const [displayData, setDisplayData]= useState();

//   useEffect(()=>{
//     fetch('https://fakestoreapi.com/products')
//     .then((res)=> res.json())
//     .then((data)=>{
//       setData(data);
//       setDisplayData(data);
//     });
//   }, []);
  
//   useEffect(()=>{
//     if (search.length > 0){
//       const newData = data.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
//       setDisplayData(newData);
//     } else setDisplayData(data);
//   }, [search , data]);

//   return (
//     <>
//     <Row className='py-5'>
//       <h1 className='text-center py-5'>Our Products</h1>
//        {displayData?.map((product) => (
//           <Col lg={4} md={6} key={product.id}>
//             <Product product={product} />
//           </Col>
//         ))}
//     </Row>
//     </>
//   );
// }
// export default ProductsList


import { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import Product from './Product';

const ProductsList = ({ search }) => {
  const [data, setData] = useState([]);
  const [displayData, setDisplayData] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setDisplayData(data);
      })
      .catch((error) => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    if (search.length > 0) {
      const newData = data.filter((product) => product.title.toLowerCase().includes(search.toLowerCase()));
      setDisplayData(newData);
    } else {
      setDisplayData(data);
    }
  }, [search, data]);

  return (
    <Row className='py-5'>
      <h1 className='text-center py-5'>Our Products</h1>
      {displayData.length > 0 ? (
        displayData.map((product) => (
          <Col md={4} key={product.id}>
            <Product product={product} />
          </Col>
        ))
      ) : (
        <p>No products found</p>
      )}
    </Row>
  );
};

export default ProductsList;




// import { useState, useEffect } from 'react';
// import { Row, Col, Spinner, Alert } from 'react-bootstrap'; // Import Spinner for loading state
// import Product from './Product';

// const ProductsList = ({ search }) => {
//   const [data, setData] = useState([]); // Initialize as empty array
//   const [displayData, setDisplayData] = useState([]);
//   const [loading, setLoading] = useState(true); // Loading state
//   const [error, setError] = useState(null); // Error state

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setData(data); // Store the fetched data
//         setDisplayData(data); // Also set the display data
//       } catch (error) {
//         setError(error.message); // Set error message
//       } finally {
//         setLoading(false); // Set loading to false after fetch attempt
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {
//     if (search.length > 0) {
//       const newData = data.filter((product) =>
//         product.title.toLowerCase().includes(search.toLowerCase()) // Case-insensitive search
//       );
//       setDisplayData(newData);
//     } else {
//       setDisplayData(data);
//     }
//   }, [search, data]); // Added data as a dependency

//   if (loading) {
//     return <Spinner animation="border" variant="primary" />; // Loading spinner
//   }

//   if (error) {
//     return <Alert variant="danger">{error}</Alert>; // Display error message
//   }

//   return (
//     <Row>
//       {displayData.length === 0 ? ( // Handle case when no products match the search
//         <Col>
//           <p>No products found</p>
//         </Col>
//       ) : (
//         displayData.map((product) => (
//           <Col md={4} key={product.id}>
//             <Product product={product} />
//           </Col>
//         ))
//       )}
//     </Row>
//   );
// };

// export default ProductsList;
