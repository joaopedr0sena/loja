import React, { useEffect, useState } from 'react';
import getProducts from '../../utils/apis/getProducts';
import Header from '../../components/organisms/header';
import ProductsList from '../../components/organisms/products-list';

export default function Search({ match: { params: { searchItem } } }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getItems = async (nameItems) => {
      const items = await getProducts('', nameItems);
      setProducts(items);
    };
    getItems(searchItem);
  }, [searchItem]);

  return (
    <div>
      <Header />
      {products ? <ProductsList list={products} /> : <p>...</p>}
    </div>
  );
}
