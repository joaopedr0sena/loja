/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import getProducts from '../utils/apis/getProducts';
import AddToCart from '../components/AddToCart';

export default function GenerateProductList(props) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);
  const { category, noId } = props;

  useEffect(() => {
    async function getProductsList() {
      let newProducts = await getProducts(category);
      if (noId) {
        newProducts = newProducts.filter((element) => element.id !== noId);
      }
      setProducts(newProducts);
      setLoading(false);
    }
    getProductsList();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading) {
    return (
      <p>...</p>
    );
  }
  return (
    <div>
      <ul>
        {products.map(({
          thumbnail,
          title,
          price,
          id,
        }) => (
          <li key={id}>
            <Link to={`/description/product/${id}`}>
              <img src={thumbnail} width="100px" alt={title} />
              <h3>{title}</h3>
              <p>{`R$ ${price}`}</p>
            </Link>
            <AddToCart itemId={id} />
          </li>
        ))}
      </ul>
    </div>
  );
}
