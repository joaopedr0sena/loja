/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import getProducts from '../../../utils/apis/getProducts';
import ItemProductsList from '../../molecules/item-products-list';

export default function ProductsList({ category, noId, list }) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getProductsList = async () => {
      const newProductsList = await getProducts(category);
      if (noId) newProductsList.slice(newProductsList.indexOf(noId));
      setProducts(newProductsList);
      setLoading(false);
    };
    if (list) {
      setProducts(list);
      setLoading(false);
    } else {
      getProductsList();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [category, list]);

  if (loading) {
    return (
      <p>...</p>
    );
  }
  return (
    <ul className="flex justify-around flex-wrap w-2/4 max-w-3xl w-screen">
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
