import React, { useEffect, useState } from 'react';
import getProducts from '../../utils/apis/getProducts';
import Header from '../../components/organisms/header';
import ProductsList from '../../components/organisms/products-list';

export default function Search(props) {
  const [products, setProducts] = useState([]);
  const { match } = props;

  useEffect(() => {
    async function getItems(nameItems) {
      const items = await getProducts('', nameItems);
      setProducts(items);
    }
    getItems(match.params.searchItem);
  }, [match]);

  return (
    <div>
      <Header />
      {products && <ProductsList list={products} />}
    </div>
  );
}
