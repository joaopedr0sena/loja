/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import getProducts from '../../../utils/apis/getProducts';
import ItemProductsList from '../../molecules/item-products-list';

export default function ProductsList({ category, noId, list }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProductsList = async () => {
      let newProductsList = await getProducts(category);
      if (noId) newProductsList = newProductsList.filter(({ id }) => id !== noId);
      setProducts(newProductsList);
      setLoading(false);
    };
    if (list) {
      setProducts(list);
      setLoading(false);
    } else {
      getProductsList();
    }
  }, [list, category, noId]);

  if (loading) {
    return (
      <p>...</p>
    );
  }
  return (
    <ul>
      {products.map(({
        thumbnail,
        title,
        price,
        id,
      }) => (
        <ItemProductsList
          id={id}
          key={id}
          title={title}
          price={price}
          thumbnail={thumbnail}
        />
      ))}
    </ul>
  );
}
