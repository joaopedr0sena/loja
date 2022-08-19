import React, { useEffect, useState } from 'react';
import getProducts from '../../../utils/apis/getProducts';
import { ItemProductsList, ItemProductsListSmaller } from '../../molecules/item-products-list';

export default function ProductsList({
  category,
  noId,
  list,
  type,
}) {
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
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
  }, [category, list, noId]);

  if (loading) {
    return (
      <p>...</p>
    );
  }
  if (type === 'recommended') {
    return (
      <ul className="flex overflow-x-auto mt-4">
        {products.map(({
          thumbnail,
          title,
          price,
          id,
        }) => (
          <ItemProductsListSmaller
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
